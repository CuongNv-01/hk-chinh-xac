#!/usr/bin/env python3
import re

# Define the navbar template
navbar_template = '''                    <ul class="rd-navbar-nav">
                      <li class="rd-nav-item{home_active}"><a class="rd-nav-link" href="index.html">Trang chủ</a>
                      </li>
                      <li class="rd-nav-item{about_active}"><a class="rd-nav-link" href="about-us.html">Về chúng tôi</a>
                      </li>
                      <li class="rd-nav-item{services_active}"><a class="rd-nav-link" href="services-2.html">Dịch vụ</a>
                        <!-- RD Navbar Dropdown-->
                        <ul class="rd-menu rd-navbar-dropdown">
                          <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="single-service.html">Sản xuất khuôn mẫu</a></li>
                          <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="single-service.html">Gia công CNC</a></li>
                          <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="single-service.html">Sản xuất sản phẩm nhựa</a></li>
                        </ul>
                      </li>
                      <li class="rd-nav-item{gallery_active}"><a class="rd-nav-link" href="grid-gallery.html">Sản phẩm</a>
                      </li>
                      <li class="rd-nav-item{contact_active}"><a class="rd-nav-link" href="contacts.html">Liên hệ</a>
                      </li>
                    </ul>'''

# Files to update with their active page
files_to_update = {
    'services-2.html': 'services',
    'grid-gallery.html': 'gallery',
    'single-service.html': 'services',
    'privacy-policy.html': None  # No active page for privacy policy
}

def get_navbar_with_active(active_page):
    """Generate navbar HTML with the correct active class"""
    navbar = navbar_template
    
    # Reset all active states
    replacements = {
        'home_active': '',
        'about_active': '',
        'services_active': '',
        'gallery_active': '',
        'contact_active': ''
    }
    
    # Set the active page
    if active_page:
        replacements[f'{active_page}_active'] = ' active'
    
    # Replace placeholders
    for key, value in replacements.items():
        navbar = navbar.replace(f'{{{key}}}', value)
    
    return navbar

# Print the navbar for each file
for filename, active_page in files_to_update.items():
    print(f"\n# Navbar for {filename}:")
    print(get_navbar_with_active(active_page))
    print("-" * 80)