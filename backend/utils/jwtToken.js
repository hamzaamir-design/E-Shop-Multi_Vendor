// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // In production we want cross-site cookies (sameSite: 'none') with secure flag.
    // In development (localhost over http) enable a more permissive policy so cookies are set.
    // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    // secure: process.env.NODE_ENV === 'production',
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;