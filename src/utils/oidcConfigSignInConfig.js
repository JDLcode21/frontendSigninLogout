const uri =
  process.env.NEXT_PUBLIC_ENV === "Dev"
    ? process.env.NEXT_PUBLIC_COGNITO_LOCAL_URL
    : process.env.NEXT_PUBLIC_COGNITO_PROD_URL;

export const oidcConfigSignInConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  redirect_uri: `${uri}/callback`,
  response_type: "code",
  scope: "email openid phone profile",
};
