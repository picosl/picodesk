export const installationSteps = [
  {
    id: 1,
    title: "Microsoft Defender SmartScreen",
    image: "/assets/support/step1.png",
    badge: "Security",
    estimatedTime: "10 seconds",

    description:
      "When you launch the PicoDesk installer, Windows may display a Microsoft Defender SmartScreen warning. This warning appears because Windows cannot immediately verify the application's publisher. It does not necessarily indicate that the installer is unsafe.",

    why:
      "Microsoft Defender SmartScreen is designed to protect your computer from unknown or potentially harmful applications. Since PicoDesk may not yet have established reputation information on your device, Windows displays this confirmation screen before allowing the installer to run.",

    action:
      "If you downloaded PicoDesk from the official website or another trusted source, click 'Run' to continue. If the installer was obtained from an unknown or suspicious source, click 'Don't Run' and download a fresh copy from the official website.",

    expected:
      "The PicoDesk Setup Wizard opens and the installation process begins.",

    tip:
      "Always download PicoDesk from the official website to ensure the installer has not been modified.",

    warning:
      "Never bypass SmartScreen for software downloaded from unknown websites.",

    note:
      "Depending on your Windows security settings, this screen may not appear on every computer."
  },

  {
    id: 2,
    title: "Select Destination Location",
    image: "/assets/support/step2.png",
    badge: "Installation",
    estimatedTime: "15 seconds",

    description:
      "Choose the folder where PicoDesk will be installed. The installer automatically selects the recommended installation directory.",

    why:
      "The installation folder stores all PicoDesk program files and related resources. Most users should keep the default location because it simplifies future updates and maintenance.",

    action:
      "Click 'Next' to use the default installation folder. If required, click 'Browse' and choose another directory before continuing.",

    expected:
      "The installer saves the selected location and proceeds to the next step.",

    tip:
      "Unless your organization has specific requirements, keep the default installation path.",

    warning:
      "",

    note:
      "Installing on an SSD provides the best application performance."
  },

  {
    id: 3,
    title: "Destination Folder Already Exists",
    image: "/assets/support/step3.png",
    badge: "Confirmation",
    estimatedTime: "5 seconds",

    description:
      "If the selected installation folder already exists, the installer asks whether you want to continue using that location.",

    why:
      "This usually happens when PicoDesk was previously installed or when the destination folder was created manually.",

    action:
      "Click 'Yes' if you are reinstalling or upgrading PicoDesk. Click 'No' only if you want to return and select another installation folder.",

    expected:
      "Choosing 'Yes' continues the installation using the existing directory.",

    tip:
      "Reinstalling into the same folder usually preserves your existing installation structure.",

    warning:
      "If the folder contains customized files, consider creating a backup before reinstalling.",

    note:
      "This message only appears when the selected directory already exists."
  },

  {
    id: 4,
    title: "Select Start Menu Folder",
    image: "/assets/support/step4.png",
    badge: "Configuration",
    estimatedTime: "10 seconds",

    description:
      "Choose where PicoDesk shortcuts will appear in the Windows Start Menu.",

    why:
      "Creating Start Menu shortcuts allows you to launch PicoDesk quickly after installation.",

    action:
      "Accept the default folder and click 'Next'. Change the folder only if your organization requires a different Start Menu structure.",

    expected:
      "The installer prepares the Start Menu shortcuts.",

    tip:
      "The default option is recommended for almost every user.",

    warning:
      "",

    note:
      "This setting only affects shortcut placement and does not change the installation location."
  },

  {
    id: 5,
    title: "Select Additional Tasks",
    image: "/assets/support/step5.png",
    badge: "Optional",
    estimatedTime: "20 seconds",

    description:
      "Choose optional installation features before continuing.",

    why:
      "These optional settings enable additional functionality such as Windows Secure Attention Sequence (SAS) support or desktop shortcuts.",

    action:
      "Enable only the features you need, then click 'Next'.",

    expected:
      "The installer saves your preferences and prepares the installation.",

    tip:
      "For most users, the default selections are recommended.",

    warning:
      "",

    note:
      "Optional features can usually be changed later by reinstalling PicoDesk."
  },

  {
    id: 6,
    title: "Ready to Install",
    image: "/assets/support/step6.png",
    badge: "Confirmation",
    estimatedTime: "5 seconds",

    description:
      "The installer displays a summary of all selected settings before copying the application files.",

    why:
      "This final review allows you to verify that all installation options are correct.",

    action:
      "Click 'Install' to begin the installation or click 'Back' if you need to modify any settings.",

    expected:
      "PicoDesk installation begins.",

    tip:
      "Review the installation folder and selected options one last time before proceeding.",

    warning:
      "",

    note:
      "Installation may take a few seconds depending on your computer."
  },

  {
    id: 7,
    title: "Completing the Setup Wizard",
    image: "/assets/support/step7.png",
    badge: "Complete",
    estimatedTime: "5 seconds",

    description:
      "PicoDesk has been installed successfully and is ready to use.",

    why:
      "The installer has copied all required files and completed the installation process.",

    action:
      "Leave 'Run PicoDesk.exe' selected if you want to launch the application immediately, then click 'Finish'.",

    expected:
      "The Setup Wizard closes and PicoDesk launches if selected.",

    tip:
      "Launching PicoDesk immediately allows you to verify that the installation completed successfully.",

    warning:
      "",

    note:
      "Administrator approval may be requested depending on your Windows configuration."
  },

  {
    id: 8,
    title: "Restart Windows",
    image: "/assets/support/step8.png",
    badge: "Final Step",
    estimatedTime: "2 minutes",

    description:
      "Some Windows components may require a restart before all PicoDesk features become fully available.",

    why:
      "Restarting ensures that all required services, drivers and system components are properly initialized.",

    action:
      "Click 'Yes' to restart immediately. Choose 'No' only if you need to finish other work first, then restart your computer as soon as possible.",

    expected:
      "After Windows restarts, PicoDesk is fully installed and ready to use.",

    tip:
      "Restarting immediately is recommended for the best experience.",

    warning:
      "Remember to save your work before restarting your computer.",

    note:
      "This screen only appears if Windows determines that a restart is required."
  }
];

export const faqData = [
  {
    question: "Is PicoDesk free to use?",
    answer:
      "Yes. PicoDesk is currently available free of charge."
  },
  {
    question: "Does PicoDesk support Windows 11?",
    answer:
      "Yes. PicoDesk fully supports both Windows 10 and Windows 11 (64-bit)."
  },
  {
    question: "Why do I see Microsoft Defender SmartScreen?",
    answer:
      "Windows displays SmartScreen for applications that it cannot immediately verify. If you downloaded PicoDesk from the official website, it is safe to continue."
  },
  {
    question: "Can I reinstall PicoDesk without losing my settings?",
    answer:
      "Yes. Reinstalling PicoDesk in the same installation folder generally preserves your existing configuration."
  },
  {
    question: "Do I need to restart Windows after installation?",
    answer:
      "Only if the installer requests it. Restarting ensures all components are loaded correctly."
  }
];