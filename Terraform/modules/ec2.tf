
resource "aws_instance" "jenkins" {
  key_name = aws_key_pair.aws-key.key_name
  ami  = "ami-098e39bafa7e7303d"
  vpc_security_group_ids = [aws_security_group.my_security_group.id]
  instance_type = "t3.medium"
  tags = {
    Name = "Jenkins-Server + trivy Scanner"
  }
  subnet_id = aws_subnet.public_subnet.id
  root_block_device {
    volume_type = "gp3"
    volume_size = 30
  }

}