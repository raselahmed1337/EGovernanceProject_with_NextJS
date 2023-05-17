import MyLayout from "./component/layout";
import Header from "./component/header";

export default function forgotPassword() {
  return (
    <>
      <MyLayout title="Forgot Password" />
      <h3><center>Change Password</center></h3>
      <form>
        <label>New Password : </label> <br></br>
        <input type="password" placeholder="new password"></input><br></br>
        <label>Confirm Password : </label> <br></br>
        <input type="password" placeholder="confirm password"></input><br></br>
        <button type="submit" placeholder="Submit">Submit</button>
      </form>
    </>
  );
}