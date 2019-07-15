const styles = {
  homeBarMain: {
    homeBar: {
      height: '4em',
      marginTop: 30,
      borderRadius: '20px 20px 0 0 ',
      alignItems: 'center',
      display: 'flex',
      width: '75em',
      boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
    },
    icon: {
      height: 40,
      marginLeft: 30,
    },
    homeButton: {
      height: '100%',
      width: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  profileCard: {
    main: {
      borderRadius: 15,
      minWidth: '14em',
      width: '15em',
      boxShadow: '0px 10px 26px -12px rgba(0,0,0,0.75)',
    },
    gearBox: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      width: '90%',
    },
    gear: {
      height: 20,
    },
    userImage: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 10,
    },
    statusNum: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    statusNumBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 20,
      textAlign: 'center',
    },
    statusTitle: {
      fontSize: 10,
    },
    statusItem: {
      fontSize: 25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
    },
    activityButton: {
      color: 'white',
      backgroundColor: 'black',
      width: '90%',
      height: '3em',
      fontSize: 12,
      fontWeight: '200',
      borderRadius: 5,
      marginBottom: 10,
    },
    membershipButton: {
      backgroundColor: '#0986FF',
      color: 'white',
      width: '90%',
      height: '5em',
      fontSize: 12,
      borderRadius: 5,
    },
    hrbreak: {
      backgroundColor: '#ECEEF2',
      border: '0',
      width: '95%',
      height: '.5px',
    },
  },
  actionCard: {
    title: {
      display: 'flex',
      alignItems: 'center',
      width: '95%',
      justifyContent: 'space-between',
    },
    hrbreak: {
      backgroundColor: '#ECEEF2',
      border: '0',
      width: '95%',
      height: '1px',
    },
  },
  FeedCard: {
    feedCardMain: {
      display: 'flex',
      justifyContent: 'space-between',
      height: 65,
      backgroundColor: 'white',
    },
    imageBorder: {
      border: '1px blue solid',
      borderRadius: '50%',
      height: 45,
      width: 45,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  LiveFeed: {
    liveFeedMain: {
      width: '90%',
      minWidth: '10em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 10,
      marginTop: 20,
    },
  },
};

export default styles;
