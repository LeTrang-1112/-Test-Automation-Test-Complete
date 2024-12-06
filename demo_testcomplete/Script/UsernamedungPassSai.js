function data(){
  var path = "D:\\KiemThuPhamMem\\TestComplete\\dataLogin.xlsx";
  var sheet = "userdungpasssai";
  var excel = DDT.ExcelDriver(path,sheet);
  while(!excel.EOF())
  {
    var pass = excel.Value("pass");
    var user = excel.Value("username");
    Test1(user,pass);
    excel.Next();
  }
}
function Test1(user,pass)
{
  TestedApps.SimpleLoginApp.Run(1, true);
  let form1 = Aliases.SimpleLoginApp.Form1;
  let groupBox = form1.groupBox1;
  groupBox.txtUsername.SetText(user);
  let textBox = groupBox.txtPassword;
  textBox.Click(82, 7);
  textBox.SetText(pass);
  form1.btnLogin.ClickButton();
  var kt = groupBox.lblMessage.Text;
  if (kt == "Tên người dùng hoặc mật khẩu không đúng.")
  {
    Log.Event("Dung");
  }
  else{
    Log.Error("Sai");
  }
  form1.Close();
}