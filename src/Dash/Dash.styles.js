const styles = {
  homeBarMain: {
    homeBar: {
      height: '4em',
      border: '1px green solid',
      marginTop: 30,
      borderRadius: '20px 20px 0 0 ',
      alignItems: 'center',
      display: 'flex',
      marginBottom: 30,
    },
    icon: {
      height: 40,
      marginLeft: 30,
    },
    homeButton: {
      height: '100%',
      width: 70,
      border: '1px red solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  profileCard: {
    main: {
      border: '1px blue solid',
      borderRadius: 15,
      width: '15em',
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
    },
  },
};

export default styles;
