#!/bin/bash

# Define the new navbar content
NEW_NAVBAR='                    <ul class="rd-navbar-nav">
                      <li class="rd-nav-item ACTIVE_PLACEHOLDER"><a class="rd-nav-link" href="index.html">Trang chủ</a>
                      </li>
                      <li class="rd-nav-item ACTIVE_PLACEHOLDER"><a class="rd-nav-link" href="about-us.html">Về chúng tôi</a>
                      </li>
                      <li class="rd-nav-item ACTIVE_PLACEHOLDER"><a class="rd-nav-link" href="services-2.html">Dịch vụ</a>
                        <!-- RD Navbar Dropdown-->
                        <ul class="rd-menu rd-navbar-dropdown">
                          <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="single-service.html">Sản xuất khuôn mẫu</a></li>
                          <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="single-service.html">Gia công CNC</a></li>
                          <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="single-service.html">Sản xuất sản phẩm nhựa</a></li>
                        </ul>
                      </li>
                      <li class="rd-nav-item ACTIVE_PLACEHOLDER"><a class="rd-nav-link" href="grid-gallery.html">Sản phẩm</a>
                      </li>
                      <li class="rd-nav-item ACTIVE_PLACEHOLDER"><a class="rd-nav-link" href="contacts.html">Liên hệ</a>
                      </li>
                    </ul>'

# Function to update navbar for a specific file
update_navbar() {
    local file=$1
    local active_page=$2
    
    # Create a temporary file with the updated navbar
    local temp_navbar=$(echo "$NEW_NAVBAR" | sed "s/ACTIVE_PLACEHOLDER/$active_page/g")
    
    echo "Updating $file..."
    
    # This is a placeholder - in reality we would need to use sed or another tool
    # to replace the navbar content between specific markers
    echo "Would update navbar in $file with active class for $active_page"
}

# Update each file
update_navbar "contacts.html" ""
update_navbar "services-2.html" "active"
update_navbar "grid-gallery.html" ""
update_navbar "single-service.html" ""
update_navbar "privacy-policy.html" ""