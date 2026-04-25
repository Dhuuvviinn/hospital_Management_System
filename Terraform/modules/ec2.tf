resource "aws_instance" "bastion" {
  ami                         = "ami-098e39bafa7e7303d"
  instance_type               = "t3.micro"
  key_name                    = aws_key_pair.aws-key.key_name

  subnet_id                   = aws_subnet.public_subnet.id
  associate_public_ip_address = true

  vpc_security_group_ids = [aws_security_group.bastion_sg.id]

  tags = {
    Name = "Bastion-Host"
  }
}


resource "aws_instance" "jenkins" {
  key_name = aws_key_pair.aws-key.key_name
  ami  = "ami-098e39bafa7e7303d"
  vpc_security_group_ids = [aws_security_group.private_sg.id]
  instance_type = "t3.medium"
  tags = {
    Name = "Jenkins-Server + trivy Scanner"
  }
  subnet_id = aws_subnet.private_subnet.id
  root_block_device {
    volume_type = "gp3"
    volume_size = 30
  }

}

resource "aws_instance" "sonarQube_Nexus" {
  ami = "ami-098e39bafa7e7303d"
  instance_type = "t3.large"
  key_name = aws_key_pair.aws-key.key_name
  vpc_security_group_ids = [aws_security_group.private_sg.id]
  subnet_id = aws_subnet.private_subnet.id
  tags = {
    Name = "SonarQube-Server + Nexus-Repository"
  }
  root_block_device {
    volume_type = "gp3"
    volume_size = 80
  }
}

resource "aws_instance" "control_panel" {
    ami = "ami-098e39bafa7e7303d"
    instance_type = "t3.medium"
    key_name = aws_key_pair.aws-key.key_name
    vpc_security_group_ids = [aws_security_group.private_sg.id]
    subnet_id = aws_subnet.private_subnet.id
    tags = {
        Name = "Control-Panel"
    } 
    root_block_device {
        volume_type = "gp3"
        volume_size = 80
    }
}

resource "aws_instance" "worker_node" {
    ami = "ami-098e39bafa7e7303d"
    for_each = toset(var.K8s_node)
    instance_type = "t3.large"
    key_name = aws_key_pair.aws-key.key_name
    vpc_security_group_ids = [aws_security_group.private_sg.id]
    subnet_id = aws_subnet.private_subnet.id
    tags = {
        Name = "${each.key}"
    } 
    root_block_device {
        volume_type = "gp3"
        volume_size = 100
    }
  
}