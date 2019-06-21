
provider "google"{
  project = "${var.project_name}"
  region = "${var.region_zone}"
  credentials = "${file("${var.credential_path}")}"
}


resource "google_container_cluster" "primary" {
  name     = "my-gke-cluster"
  location = "us-east1-c"

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count = 1

  master_auth {
    username = ""
    password = ""

    client_certificate_config {
      issue_client_certificate = false
    }
  }
}

resource "google_container_node_pool" "primary_preemptible_nodes" {
  name       = "breakout-game-nod-pool"
  location   = "${var.region_zone}"
  cluster    = "${google_container_cluster.primary.name}"

  initial_node_count = 1
  autoscaling = {
    min_node_count = 1
    max_node_count = "${var.max_nodes}"
  }


  node_config {
    preemptible  = true
    machine_type = "${var.machine_type}"

    metadata = {
      disable-legacy-endpoints = "true"
    }

    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
      "https://www.googleapis.com/auth/devstorage.read_only"
    ]
  }
}
