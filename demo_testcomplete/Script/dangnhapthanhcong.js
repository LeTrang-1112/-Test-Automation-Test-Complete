
function Test1()
{
  TestedApps.SimpleLoginApp.Run(1, true);
  let form1 = Aliases.SimpleLoginApp.Form1;
  let groupBox = form1.groupBox1;
  let textBox = groupBox.txtUsername;
  textBox.Click(118, 8);
  textBox.SetText("admin");
  textBox = groupBox.txtPassword;
  textBox.Click(94, 13);
  textBox.SetText(Project.Variables.Password3);
  form1.btnLogin.ClickButton();
  aqObject.CheckProperty(groupBox.lblMessage, "Text", cmpEqual, "Đăng nhập thành công!");
  form1.Close();
}