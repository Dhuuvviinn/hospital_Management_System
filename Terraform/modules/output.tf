output "public_id" {
  value = aws_instance.jenkins.public_ip
}

output "instance_public_dns" {
  value = aws_instance.jenkins.public_dns
}