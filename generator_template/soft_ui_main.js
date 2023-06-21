

    const SoftUI = require("dbd-soft-ui")
    const config = require('./config.json');
    let DBD = require('discord-dashboard');


    //MAIN STARTS HERE

 await DBD.useLicense(config.dbd.license);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        port: config.dbd.port,
        client: config.discord.client,
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        domain: config.dbd.domain,
        ownerIDs: config.dbd.ownerIDs,
        useThemeMaintenance: true,
        useTheme404: true,
        // bot: config.discord.client
        bot: s4d.client,
        theme: SoftUI({
          websiteName: "WEBSITE NAME",
          colorScheme: "COLOR SCHEME",
          supporteMail: "SUPPORT EMAIL",
          icons: {
        favicon: "FAVICON URL",
        noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
        sidebar: {
            darkUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
            lightUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
            hideName: true,
            borderRadius: false,
            alignCenter: true
        }
    },      
        }),
    });
    Dashboard.init();
  // DASHBOARD CODE ENDS HERE
    
