output "Jenkins_public_ip" {
  value = aws_instance.jenkins.public_ip
}

output "Jenkins_public_dns" {
  value = aws_instance.jenkins.public_dns
}

output "sonarQube_public_ip" {
  value = aws_instance.sonarQube_Nexus.public_ip
}
output "sonarQube_public_dns" {
  value = aws_instance.sonarQube_Nexus.public_dns
}