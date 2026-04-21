resource "aws_s3_bucket" "media_bucket" {
  bucket = "dhruvin-hms-media-bucket-12345"  # must be unique globally

  tags = {
    Name        = "Media Bucket"
    Environment = "Production"
  }
}

resource "aws_s3_bucket_public_access_block" "media_bucket_block" {
  bucket = aws_s3_bucket.media_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}