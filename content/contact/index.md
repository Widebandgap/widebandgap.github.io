---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: <br><br>
        We generally have openings every year for PhD, master & visiting scholars who have background in cleanroom fabrication, semiconductor device, processing technologies and power electronics circuit. Please contact us!
      email: yuhzhang@hku.hk
      phone: 3917 1913
      address:
        street: Pokful Road
        city: Hong Kong
        region: Central and Western District
        postcode: 
        country: Hong Kong
        country_code: HK
      coordinates:
        latitude: '22.2833'
        longitude: '114.1375'
      directions: CB-507
      # appointment_url: 'https://calendly.com'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: Discuss on Forum
      #    link: 'https://discourse.gohugo.io'
    
      # Automatically link email and phone or display as text?
      # autolink: true
    
      # Email form provider
      # form:
        # provider: netlify
        # formspree:
          # id:
        # netlify:
          # Enable CAPTCHA challenge to reduce spam?
          # captcha: false
    design:
      columns: '1'
    
  - block: markdown
    content:
      title:
      text: |
        <!-- Leaflet CSS -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
        
        <!-- Map container -->
        <div id="map" style="height:400px;"></div>
        
        <!-- Leaflet JS -->
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
        
        <script>
          var map = L.map('map').setView([22.2833, 114.1375], 15);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);
          L.marker([22.2833, 114.1375]).addTo(map)
            .bindPopup("CB-507, Pokful Road, Hong Kong")
            .openPopup();
        </script>
    design:
      background:
        color: '#ffffff'
      spacing:
        padding: ['0','0','20px','0']   # top, right, bottom, left


  - block: markdown
    content:
      text: |
        <p style="text-align:center">
        <font size=3> © 2025 Prof. Yuhao Zhang at Wide Bandgap Electronics Group | Department of EEE | HKU | Built with <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY NC ND 4.0</a> </font>
        </p>
    design:
      align: center
      background:
        image:
          filename: background.jpg
          text_color_light: false
          size: cover
          parallax: false
        position: center
        spacing:
          padding: ['0', '80px', '0', '80px']
---
