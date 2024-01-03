// creating token and saving it in cookies
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    // cookies option
    const options = {
      expires: new Date(Date.now() + 90 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    // send the token in the response
    res
      .status(statusCode)
      .cookie("token", token, options)
      .json({
        success: true,
        user,
        token,
      });
  };
  
  module.exports = sendToken;
  