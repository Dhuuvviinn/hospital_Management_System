resource "aws_key_pair" "aws-key" {
  key_name = "SoftwareProject-key"
  public_key = file("terr-key.pub")
}