# 🏥 HMS - Hospital Management System Architecture on AWS

I built a cloud-native Hospital Management System using AWS, Kubernetes, DevOps, monitoring, and Infrastructure as Code.

This project is designed like a real production environment with secure private servers, CI/CD automation, containerized services, and monitoring.

## 🚀 Tech Stack

- Frontend: React
- Backend: Django REST API
- Database: PostgreSQL
- Async Tasks: Celery
- Cache/Broker: Redis
- Containerization: Docker
- Image Registry: Docker Hub
- Orchestration: Kubernetes / Amazon EKS
- CI/CD: Jenkins
- Code Quality: SonarQube
- Monitoring: Prometheus and Grafana
- Infrastructure as Code: Terraform
- Storage: Amazon S3

## 🏗️ AWS Architecture

![Architecture Diagram](./Frontend/HMS/src/img/aws.png)
![Server Image](./Frontend/HMS/src/img/sc1.png)
![Public Server](./Frontend/HMS/src/img/sc2.png)
![Public Bastion Server](./Frontend/HMS/src/img/sc4.png)

The system is deployed inside an AWS VPC with public and private subnets.

Public subnet:
- AWS Load Balancer
- NGINX Ingress Controller

Private subnet:
- React frontend pods
- Django backend pods
- Celery worker pods
- Redis
- PostgreSQL
- Jenkins server
- SonarQube server
- Prometheus
- Grafana
- Kubernetes worker nodes

## 🔐 Private Server Access

Jenkins, SonarQube, PostgreSQL, Kubernetes, Grafana, and Prometheus are not exposed publicly.

They are accessible only by admin through:
- Bastion Host
- SSH tunneling
- Private IP access
- Security Group restrictions

This keeps internal tools secure and prevents public access to sensitive services.

## 🔄 CI/CD Pipeline with Jenkins

![Jenkins Server](./Frontend/HMS/src/img/sc5.png)
![Jenkins CI/CD](./Frontend/HMS/src/img/sc6.png)

The Jenkins pipeline includes:

1. GitHub checkout
2. Inject environment variables
3. Backend test coverage
4. File system scanner
5. SonarQube scanner
6. Quality Gate check
7. Docker login
8. Docker image build
9. Docker image push
10. Kubernetes rollout restart

The pipeline successfully deploys the application to Kubernetes after code quality checks pass.

## 🧪 SonarQube Code Quality

![SonarQube Server](./Frontend/HMS/src/img/sc7.png)
![SonarQube](./Frontend/HMS/src/img/sc8.png)

SonarQube is integrated with Jenkins to scan the project for:

- Bugs
- Code smells
- Security issues
- Maintainability
- Reliability
- Test coverage
- Duplications

The project passed the SonarQube Quality Gate.

## ☸️ Kubernetes Deployment

Application services are deployed in the `hms` namespace.

![Kubernetes Pods](./Frontend/HMS/src/img/sc9.png)
![Kubernetes Pods](./Frontend/HMS/src/img/sc10.png)

Running workloads include:

- hms-backend
- hms-frontend
- hms-celery
- hms-postgres
- redis

Kubernetes handles service discovery, scaling, pod management, and rollout updates.

## 📊 Monitoring with Prometheus and Grafana

Monitoring stack is deployed in a separate `monitoring` namespace.

![Kubernetes Pods](./Frontend/HMS/src/img/sc11.png)
![Kubernetes Pods](./Frontend/HMS/src/img/sc12.png)

Components include:

- Prometheus
- Grafana
- Alertmanager
- Node Exporter
- Kube State Metrics
- Prometheus Operator

Grafana dashboards are used to monitor:

- CPU usage
- CPU throttling
- Pod resources
- Kubernetes workloads
- Namespace-level metrics

## 🧱 Terraform Infrastructure as Code

Terraform is used to provision the AWS infrastructure.

![Kubernetes Pods](./Frontend/HMS/src/img/terra.png)

Terraform creates:

- VPC
- Public and private subnets
- Internet Gateway
- NAT Gateway
- Route tables
- Security Groups
- IAM roles and policies
- EC2 instances
- EKS cluster
- Worker nodes
- Load Balancer
- S3 bucket

S3 is used for media/static storage and can also be used for Terraform remote state.

## 🌐 Request Flow

User  
→ AWS Load Balancer  
→ NGINX Ingress Controller  
→ React Frontend  
→ Django Backend API  
→ PostgreSQL / Redis  
→ Celery Worker for async tasks  

## 🔒 Security Highlights

- Private subnet for backend and internal tools
- Admin-only access for DevOps and monitoring tools
- Bastion host for secure SSH access
- Security Groups restrict inbound traffic
- PostgreSQL and Redis accessible only from backend services
- No public access to database or monitoring services

## 📌 Key Features

- Production-style AWS architecture
- React and Django full-stack application
- Dockerized services
- Kubernetes-based deployment
- Jenkins CI/CD pipeline
- SonarQube quality checks
- Prometheus and Grafana monitoring
- Terraform Infrastructure as Code
- Secure private server access

## 💡 Key Learnings

This project helped me understand:

- How to design secure AWS infrastructure
- How Kubernetes manages production workloads
- How Jenkins automates CI/CD pipelines
- How SonarQube improves code quality
- How Prometheus and Grafana monitor Kubernetes
- How Terraform manages infrastructure as code
- How private servers are accessed securely using Bastion Host

## 👨‍💻 Project Summary

This Hospital Management System is not just an application. It is a complete DevOps-based cloud architecture using AWS, Kubernetes, Terraform, Jenkins, SonarQube, Docker, Prometheus, Grafana, PostgreSQL, Redis, Celery, Django, and React.

Proud to complete this end-to-end cloud and DevOps project.