const styles = {
  homeBarMain: {
    homeBar: {
      height: '4em',
      border: '1px green solid',
      marginTop: 30,
      borderRadius: '20px 20px 0 0 ',
      alignItems: 'center',
      display: 'flex',
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
      width: '20em',
    },
    gearBox: {
      border: '1px black solid',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    gear: {
      height: 25,
      marginRight: 10,
    },
    userImage: {
      border: '1px red solid',
      display: 'flex',
      justifyContent: 'center',
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
    buttons: {
      display: 'flex',
      justifyContent: 'center',
    },
    activityButton: {
      color: 'white',
      backgroundColor: 'black',
      width: '90%',
      height: '2em',
      fontSize: 20,
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
  },
};

export default styles;
