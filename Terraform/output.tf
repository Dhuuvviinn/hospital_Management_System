output "Jenkins_public_ip" {
  value = module.infra.Jenkins_public_ip
}

output "Jenkins_public_dns" {
  value = module.infra.Jenkins_public_dns
}

output "sonarQube_public_ip" {
  value = module.infra.sonarQube_public_ip
}

output "sonarQube_public_dns" {
  value = module.infra.sonarQube_public_dns
}