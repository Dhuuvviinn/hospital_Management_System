output "public_ip" {
  value = module.infra.public_id
}

output "public_dns" {
  value = module.infra.instance_public_dns
}