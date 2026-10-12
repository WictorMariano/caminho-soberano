export type SignupFormState =
  | { status: "idle" }
  | { status: "success"; firstName: string }
  | { status: "error"; message: string };

export const initialSignupState: SignupFormState = { status: "idle" };

export const HONEYPOT_FIELD = "website";
