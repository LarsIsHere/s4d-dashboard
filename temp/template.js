(async () => {
    // default imports
    const events = require('events');
    const {
        exec
    } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports

    const SoftUI = require("dbd-soft-ui")
    const config = require('./config.json');
    let DBD = require('discord-dashboard');

    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire: null,
        joiningMember: null,
        reply: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord.js'] = '^13.15.1'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.12.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord-logs'] = '^2.0.0'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION",
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function(err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code


    // blockly code wat

    await s4d.client.login('MTEyMDc2NDM2NDc2OTczODc1Mg.GFSAqu.RYZ2ymA7_h1C6Dnl45ov5K4Q6qIzLEbNdC_bk0').catch((e) => {
        const tokenInvalid = true;
        const tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });
  
    //! DASHBOARD SPAWNS HERE :D  its long, sooooooo... if we want to add this to s4d
  // we might need to find a workaround for this..
    
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
          websiteName: "test",
          colorScheme: "pink",
          supporteMail: "you@example.com",
          icons: {
        favicon: "https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png",
        noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
        sidebar: {
            darkUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
            lightUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
            hideName: true,
            borderRadius: false,
            alignCenter: true
        }
    },
          image: "/img/soft-ui.webp",
           preloader: {
        image: "/img/soft-ui.webp",
        spinner: false,
        text: "Page is loading"
    },
           customThemeOptions: {
                index: async ({ req, res, config }) => {
                    return {
                        values: [],
                        graph: {},
                        cards: [],
                    }
                },
            },
          index: {
              graph: {
            enabled: false,
            lineGraph: false,
            tag: 'Memory (MB)',
            max: 100
        },
          },
         locales:{
           enUS:{
             name:"English",
             index:{
                feeds: ["Current Users", "CPU", "System Platform", "Server Count"],
                card: {
                    image: "FSH",
                    category: "fsh",
                    title: "Assistantseeeeeeee center of everything",
                    description:
                        "Assistants Discord Bot management panel. Assistants Bot was created to give others the ability to do what they want. Just.<br>That's an example text. <br><br><b><i>Feel free to use HTML</i></b>",
                    footer: "Learn More"
                },
                feedsTitle: "Feeds",
                graphTitle: "Graphs"
            
             }
           }
         }
        }),
      settings: [
            {
    categoryId: 'unique_id',
    categoryName: "Category Name",
    categoryDescription: "Category Description",
    categoryOptionsList: [
      {
    optionId: 'lang',
    optionName: "Language",
    optionDescription: "Change bot's language easily",
    optionType: DBD.formTypes.select({"Polish": 'pl', "English": 'en', "French": 'fr'}),
    getActualSet: async ({guild}) => {
        return ;
    },
    setNew: async ({guild,newData}) => {
        
        return;
    }
},
    ]
}
]
    });
    Dashboard.init();
  // DASHBOARD CODE ENDS HERE
    return s4d
})();