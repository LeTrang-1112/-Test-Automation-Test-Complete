function data() {
   var path = "D:\\KiemThuPhamMem\\TestComplete\\dataLogin.xlsx";
   var sheetName = "thanhcong";

   var excel = DDT.ExcelDriver(path, sheetName);
   
   for (var i = 0; i < 4; i++) {
     
     excel.Next();  
     }
     
   var user = excel.Value(0) !== null && excel.Value(0) !== undefined ? String(excel.Value(0)) : "";
     var pass = excel.Value(1) !== null && excel.Value(1) !== undefined ? String(excel.Value(1)) : "";
     Test1(user, pass);
   
   DDT.CloseDriver(excel.Name); 
}
function Test1(user,pass)
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
    Log.Event("Dung");
  }
  else{
    Log.Error("Sai");
  }
  form1.Close();
}