const levelManifest = [
  {
    id: 'snes',
    img: 'snes',
    name: 'SNES',
    charList: [
      {
        id: 'dkong',
        name: 'Donkey Kong',
        img: 'snes-dk',
      },
      {
        id: 'chrono',
        name: 'Chrono',
        img: 'snes-chrono',
      },
      {
        id: 'pinklink',
        name: 'Link',
        img: 'snes-link',
      },
      {
        id: 'metroid',
        name: 'Samus',
        img: 'snes-samus',
      },
      {
        id: 'earthbound',
        name: 'Ness',
        img: 'snes-ness',
      },
    ],
  },
  {
    id: 'ps1',
    img: 'ps1',
    name: 'Sony PlayStation 1',
    charList: [
      {
        id: 'castlevania',
        name: 'Alucard',
        img: 'ps1-alucard',
      },
      {
        id: 'parappa',
        name: 'PaRappa',
        img: 'ps1-parappa',
      },
      {
        id: 'metalgear',
        name: 'Solid Snake',
        img: 'ps1-ssnake',
      },
      {
        id: 'ff7',
        name: 'Cloud Strife',
        img: 'ps1-cloud',
      },
      {
        id: 'tombraider',
        name: 'Lara Croft',
        img: 'ps1-laracroft',
      },
    ],
  },
  {
    id: 'dreamcast',
    img: 'dreamcast',
    name: 'Sega Dreamcast',
    charList: [
      {
        id: 'sonic',
        name: 'Sonic',
        img: 'dreamcast-sonic',
      },
      {
        id: 'jetset',
        name: 'Mew',
        img: 'dreamcast-mew',
      },
      {
        id: 'shenmue',
        name: 'Ryo Hazuki',
        img: 'dreamcast-ryo',
      },
      {
        id: 'spacechannel',
        name: 'Ulala',
        img: 'dreamcast-ulala',
      },
      {
        id: 'powerstone',
        name: 'Edward Falcon',
        img: 'dreamcast-falcon',
      },
    ],
  },
  {
    id: 'n64',
    img: 'n64',
    name: 'Nintendo 64',
    charList: [
      {
        id: 'starfox',
        name: 'Fox McCloud',
        img: 'n64-fox',
      },
      {
        id: 'luigi',
        name: 'Luigi',
        img: 'n64-luigi',
      },
      {
        id: 'harvestmoon',
        name: 'Pete',
        img: 'n64-pete',
      },
      {
        id: 'fzero',
        name: 'Captain Falcon',
        img: 'n64-falcon',
      },
      {
        id: 'jetforce',
        name: 'Vela',
        img: 'n64-vela',
      },
    ],
  },
];

const getLevelManifest = () => levelManifest;

export default getLevelManifest;
