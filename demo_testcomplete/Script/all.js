function data() {
   var path = "D:\\KiemThuPhamMem\\TestComplete\\dataLogin.xlsx";
   var sheetName = "testdata";

   var excel = DDT.ExcelDriver(path, sheetName);
   
   for (var i = 0; i < 7; i++) {
     var user = excel.Value(0) !== null && excel.Value(0) !== undefined ? String(excel.Value(0)) : "";
     var pass = excel.Value(1) !== null && excel.Value(1) !== undefined ? String(excel.Value(1)) : "";
     var kq = excel.Value(2);
     Test1(user, pass,kq);
     excel.Next();  
     } 
   DDT.CloseDriver(excel.Name); 
}
function Test1(user,pass,kq)
{
  TestedApps.SimpleLoginApp.Run(1, true);
  let form1 = Aliases.SimpleLoginApp.Form1;
  let groupBox = form1.groupBox1;
  groupBox.txtUsername.SetText(user);
  let textBox = groupBox.txtPassword;
  textBox.Click(18, 4);
  textBox.SetText(pass);
  form1.btnLogin.ClickButton();
  if(groupBox.lblMessage.Text == "Tên người dùng hoặc mật khẩu không đúng."){
    Log.Event(kq);
  }
  else if(groupBox.lblMessage.Text == "Vui lòng nhập tên người dùng và mật khẩu.")
  {
        Log.Event(kq);
  }
  else if(groupBox.lblMessage.Text == "Vui lòng nhập tên người dùng.")
  {
        Log.Event(kq);
  }
  else if(groupBox.lblMessage.Text == "Vui lòng nhập mật khẩu.")
  {
        Log.Event(kq);
  }
  else if(groupBox.lblMessage.Text == "Đăng nhập thành công!")
  {
        Log.Event(kq);
  }
  else{
    Log.Error("Sai");
  }
  form1.Close();
}