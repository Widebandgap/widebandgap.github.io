---
title: People
date: 2022-10-24

type: landing

sections:
  - block: people
    content:
      title: Meet the Team
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Professor # 教授
          - Principal Investigators # 首席研究员
          - Researchers             # 研究人员
          - Grad Students           # 研究生
          - Administration          # 行政人员
          - Visitors                # 访问者
          - Alumni                  # 校友
      sort_by: Params.last_name     # 按姓氏排序
      sort_ascending: true          # 升序排列
    design:
      show_interests: false  # 不显示兴趣
      show_role: true        # 显示角色
      show_social: true      # 显示社交媒体链接
    
  - block: markdown
    content:
      title: Alumni
      subtitle: ''
      text: <br> Our group explores <strong>wide bandgap (WBG) and ultra-wide bandgap (UWBG)</strong> materials and devices in electronic applications.
        <br> 
        Our research interests span the physics, design, simulation, fabrication, characterization, reliability, robustess, packaging, and circuit applications of WBG and UWBG devices.
        <br> 
        Our research emphasizes on the fundamental understanding of UWB/UWBG devices, their new applications in power, RF, sensing, and computing applications, as well as the relevant material-device co-design with machine learning.
        <br> 
        Our group highlights a full-stack research scope from materials and devices to circuits and algorithms, and the seamless collaborations with the industry.
    design:
      columns: '1'
      #spacing:
        # padding: ['20px', '0', '20px', '0']
      # css_class: fullscreen
---
