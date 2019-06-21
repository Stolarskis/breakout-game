################################################################################
#                           GCP VARIABLE DEFINITIONS                           #
################################################################################

variable "project_name" {
  type        = "string"
  description = "Name of Google Cloud Platform project."
  default = "breakout-game-243923"
}

variable "region_zone"{
    default = "us-east1-c"
}

variable "credential_path"{
    default = "./kubernetes-creds.json"
}

variable "machine_type"{
    default = "n1-standard-1"
}

variable "max_nodes"{
    default = 3
}
