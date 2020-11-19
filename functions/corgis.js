exports.handler = async () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      id: 'Zwvxj3ytTHc',
      name: 'Dögg Barkardóttir',
      favoriteSong: 'Bjärk — Play Dead',
    },
    {
      id: 'yxmNWxi3wCo',
      name: 'Miz Barkie',
      favoriteSong: 'Corgi B — WAP (Wiggly-Ass Puppy)',
    },
    {
      id: 'KQN500iE8KA',
      name: 'Walden',
      favoriteSong: 'Death Cab For Corgi — I Will Follow You Into The Park',
    },
    {
      id: 'J5feaur-y6I',
      name: 'Atticus',
      favoriteSong: 'Furrell Williams — Yappy',
    },
    {
      id: 'uc3JhSWITMo',
      name: 'Millie',
      favoriteSong: 'Anderson .Pawk — Come Down',
    },
    {
      id: 'cX-KEISwDIw',
      name: 'Admiral Ackbark',
      favoriteSong: 'Splootie & The Blowfish — Only Wanna Steal Your Food',
    },
  ]),
});
