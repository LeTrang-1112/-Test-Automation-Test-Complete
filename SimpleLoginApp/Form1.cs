using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SimpleLoginApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click_1(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            string username = txtUsername.Text;
            string password = txtPassword.Text;

            // Kiểm tra trường hợp không nhập gì
            if (string.IsNullOrWhiteSpace(username) && string.IsNullOrWhiteSpace(password))
            {
                lblMessage.Text = "Vui lòng nhập tên người dùng và mật khẩu.";
                lblMessage.ForeColor = System.Drawing.Color.Red;
            }
            else if (string.IsNullOrWhiteSpace(username))
            {
                lblMessage.Text = "Vui lòng nhập tên người dùng.";
                lblMessage.ForeColor = System.Drawing.Color.Red;
            }
            else if (string.IsNullOrWhiteSpace(password))
            {
                lblMessage.Text = "Vui lòng nhập mật khẩu.";
                lblMessage.ForeColor = System.Drawing.Color.Red;
            }
            else
            {
                // Giả lập kiểm tra thông tin đăng nhập
                if (username == "admin" && password == "password")
                {
                    lblMessage.Text = "Đăng nhập thành công!";
                    lblMessage.ForeColor = System.Drawing.Color.Green;
                }
                else
                {
                    lblMessage.Text = "Tên người dùng hoặc mật khẩu không đúng.";
                    lblMessage.ForeColor = System.Drawing.Color.Red;
                }
            }
        }
    }
}
