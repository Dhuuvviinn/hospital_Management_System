output "Jenkins_public_ip" {
  value = aws_instance.jenkins.private_ip
}

output "Jenkins_public_dns" {
  value = aws_instance.jenkins.id
}

output "sonarQube_public_ip" {
  value = aws_instance.sonarQube_Nexus.private_ip
}
output "sonarQube_public_dns" {
  value = aws_instance.sonarQube_Nexus.id
}

output "control_panel_public_ip" {
  value = aws_instance.control_panel.private_ip
  
}

output "control_panel_public_dns" {
  value = aws_instance.control_panel.id
  
}