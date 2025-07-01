const oidcConfigSignOutConfig = () => {
  const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
  const logoutUri = "http://localhost:3000";
  const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  sessionStorage.clear();
};

export default oidcConfigSignOutConfig;
