-- Caminho Soberano: banco da área administrativa.
-- Rode este arquivo inteiro no SQL Editor do Supabase (pode rodar de novo sem duplicar nada).

create extension if not exists pgcrypto;

-- Lista de espera dos eventos (formulário principal de /lista-de-espera)
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) <= 254),
  whatsapp text not null check (char_length(whatsapp) <= 24),
  city text not null check (char_length(city) <= 100),
  state char(2) not null,
  interests text[] not null default '{}',
  preferred_city text not null check (char_length(preferred_city) <= 100),
  preferred_state char(2) not null,
  october_event boolean not null default false,
  consent boolean not null default false
);

-- Lista de espera do grupo do WhatsApp (formulário da seção Comunidade)
create table if not exists public.community_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) <= 254),
  whatsapp text not null check (char_length(whatsapp) <= 24),
  city text not null check (char_length(city) <= 100),
  region text not null check (char_length(region) <= 40),
  consent boolean not null default false
);

create index if not exists waitlist_signups_created_at_idx on public.waitlist_signups (created_at desc);
create index if not exists community_signups_created_at_idx on public.community_signups (created_at desc);

-- Quem pode entrar na área administrativa
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;
alter table public.community_signups enable row level security;
alter table public.admins enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

drop policy if exists "Admins leem a lista de espera" on public.waitlist_signups;
create policy "Admins leem a lista de espera"
  on public.waitlist_signups for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Admins leem o grupo do WhatsApp" on public.community_signups;
create policy "Admins leem o grupo do WhatsApp"
  on public.community_signups for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Admin ve o proprio cadastro" on public.admins;
create policy "Admin ve o proprio cadastro"
  on public.admins for select
  to authenticated
  using (user_id = auth.uid());

-- Os formulários gravam pelo servidor do site com a chave service role,
-- por isso não existe nenhuma política de insert para o público.

-- Para liberar um administrador:
-- 1. Crie o usuário em Authentication > Users > Add user (e-mail e senha).
-- 2. Rode a linha abaixo trocando o e-mail:
-- insert into public.admins (user_id, email)
-- select id, email from auth.users where email = 'admin@exemplo.com'
-- on conflict (user_id) do nothing;
