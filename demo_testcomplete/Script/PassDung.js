function data(){
  var path = "D:\\KiemThuPhamMem\\TestComplete\\dataLogin.xlsx";
  var sheet = "passdung";
  var excel = DDT.ExcelDriver(path,sheet);
  while(!excel.EOF())
  {
    var pass = excel.Value("pass");
    Test1(pass);
    excel.Next();
  }
}
function Test1(pass)
{
  TestedApps.SimpleLoginApp.Run(1, true);
  let form1 = Aliases.SimpleLoginApp.Form1;
  let groupBox = form1.groupBox1;
  groupBox.txtUsername.SetText("");
  let textBox = groupBox.txtPassword;
  textBox.Click(102, 17);
  textBox.SetText(pass);
  form1.btnLogin.ClickButton();
  let vlabel = groupBox.lblMessage;
  vlabel.Click(167, 9);
  vlabel.DblClick(174, 3);
  var kt = vlabel.Text;
  if(kt == "Vui lòng nhập tên người dùng."){
    Log.Event("Dung");
  }
  else{
    Log.Error("Sai");
  }
  form1.Close();
}