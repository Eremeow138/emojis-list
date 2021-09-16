import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // eslint-disable-next-line class-methods-use-this
  createDb() {
    const emojis = [
      {
        name: '100',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4af.png?v8',
      },
      {
        name: '1234',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f522.png?v8',
      },
      {
        name: '+1',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8',
      },
      {
        name: '-1',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png?v8',
      },
      {
        name: '1st_place_medal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f947.png?v8',
      },
      {
        name: '2nd_place_medal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f948.png?v8',
      },
      {
        name: '3rd_place_medal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f949.png?v8',
      },
      {
        name: '8ball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b1.png?v8',
      },
      {
        name: 'a',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f170.png?v8',
      },
      {
        name: 'ab',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f18e.png?v8',
      },
      {
        name: 'abacus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ee.png?v8',
      },
      {
        name: 'abc',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f524.png?v8',
      },
      {
        name: 'abcd',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f521.png?v8',
      },
      {
        name: 'accept',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f251.png?v8',
      },
      {
        name: 'accordion',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa97.png?v8',
      },
      {
        name: 'adhesive_bandage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa79.png?v8',
      },
      {
        name: 'adult',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1.png?v8',
      },
      {
        name: 'aerial_tramway',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a1.png?v8',
      },
      {
        name: 'afghanistan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1eb.png?v8',
      },
      {
        name: 'airplane',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2708.png?v8',
      },
      {
        name: 'aland_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fd.png?v8',
      },
      {
        name: 'alarm_clock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23f0.png?v8',
      },
      {
        name: 'albania',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f1.png?v8',
      },
      {
        name: 'alembic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2697.png?v8',
      },
      {
        name: 'algeria',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ff.png?v8',
      },
      {
        name: 'alien',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f47d.png?v8',
      },
      {
        name: 'ambulance',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f691.png?v8',
      },
      {
        name: 'american_samoa',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f8.png?v8',
      },
      {
        name: 'amphora',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3fa.png?v8',
      },
      {
        name: 'anatomical_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fac0.png?v8',
      },
      {
        name: 'anchor',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2693.png?v8',
      },
      {
        name: 'andorra',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1e9.png?v8',
      },
      {
        name: 'angel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f47c.png?v8',
      },
      {
        name: 'anger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a2.png?v8',
      },
      {
        name: 'angola',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f4.png?v8',
      },
      {
        name: 'angry',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f620.png?v8',
      },
      {
        name: 'anguilla',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ee.png?v8',
      },
      {
        name: 'anguished',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f627.png?v8',
      },
      {
        name: 'ant',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f41c.png?v8',
      },
      {
        name: 'antarctica',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f6.png?v8',
      },
      {
        name: 'antigua_barbuda',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ec.png?v8',
      },
      {
        name: 'apple',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34e.png?v8',
      },
      {
        name: 'aquarius',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2652.png?v8',
      },
      {
        name: 'argentina',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f7.png?v8',
      },
      {
        name: 'aries',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2648.png?v8',
      },
      {
        name: 'armenia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f2.png?v8',
      },
      {
        name: 'arrow_backward',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25c0.png?v8',
      },
      {
        name: 'arrow_double_down',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23ec.png?v8',
      },
      {
        name: 'arrow_double_up',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23eb.png?v8',
      },
      {
        name: 'arrow_down',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2b07.png?v8',
      },
      {
        name: 'arrow_down_small',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f53d.png?v8',
      },
      {
        name: 'arrow_forward',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25b6.png?v8',
      },
      {
        name: 'arrow_heading_down',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2935.png?v8',
      },
      {
        name: 'arrow_heading_up',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2934.png?v8',
      },
      {
        name: 'arrow_left',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2b05.png?v8',
      },
      {
        name: 'arrow_lower_left',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2199.png?v8',
      },
      {
        name: 'arrow_lower_right',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2198.png?v8',
      },
      {
        name: 'arrow_right',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/27a1.png?v8',
      },
      {
        name: 'arrow_right_hook',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/21aa.png?v8',
      },
      {
        name: 'arrow_up',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2b06.png?v8',
      },
      {
        name: 'arrow_up_down',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2195.png?v8',
      },
      {
        name: 'arrow_up_small',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f53c.png?v8',
      },
      {
        name: 'arrow_upper_left',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2196.png?v8',
      },
      {
        name: 'arrow_upper_right',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2197.png?v8',
      },
      {
        name: 'arrows_clockwise',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f503.png?v8',
      },
      {
        name: 'arrows_counterclockwise',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f504.png?v8',
      },
      {
        name: 'art',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png?v8',
      },
      {
        name: 'articulated_lorry',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f69b.png?v8',
      },
      {
        name: 'artificial_satellite',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f0.png?v8',
      },
      {
        name: 'artist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3a8.png?v8',
      },
      {
        name: 'aruba',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fc.png?v8',
      },
      {
        name: 'ascension_island',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1e8.png?v8',
      },
      {
        name: 'asterisk',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/002a-20e3.png?v8',
      },
      {
        name: 'astonished',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f632.png?v8',
      },
      {
        name: 'astronaut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f680.png?v8',
      },
      {
        name: 'athletic_shoe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f45f.png?v8',
      },
      {
        name: 'atm',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e7.png?v8',
      },
      {
        name: 'atom',
        link: 'https://github.githubassets.com/images/icons/emoji/atom.png?v8',
      },
      {
        name: 'atom_symbol',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/269b.png?v8',
      },
      {
        name: 'australia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fa.png?v8',
      },
      {
        name: 'austria',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f9.png?v8',
      },
      {
        name: 'auto_rickshaw',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6fa.png?v8',
      },
      {
        name: 'avocado',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f951.png?v8',
      },
      {
        name: 'axe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa93.png?v8',
      },
      {
        name: 'azerbaijan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ff.png?v8',
      },
      {
        name: 'b',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f171.png?v8',
      },
      {
        name: 'baby',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f476.png?v8',
      },
      {
        name: 'baby_bottle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f37c.png?v8',
      },
      {
        name: 'baby_chick',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f424.png?v8',
      },
      {
        name: 'baby_symbol',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6bc.png?v8',
      },
      {
        name: 'back',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f519.png?v8',
      },
      {
        name: 'bacon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f953.png?v8',
      },
      {
        name: 'badger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a1.png?v8',
      },
      {
        name: 'badminton',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f8.png?v8',
      },
      {
        name: 'bagel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f96f.png?v8',
      },
      {
        name: 'baggage_claim',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6c4.png?v8',
      },
      {
        name: 'baguette_bread',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f956.png?v8',
      },
      {
        name: 'bahamas',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f8.png?v8',
      },
      {
        name: 'bahrain',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ed.png?v8',
      },
      {
        name: 'balance_scale',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2696.png?v8',
      },
      {
        name: 'bald_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b2.png?v8',
      },
      {
        name: 'bald_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b2.png?v8',
      },
      {
        name: 'ballet_shoes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa70.png?v8',
      },
      {
        name: 'balloon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f388.png?v8',
      },
      {
        name: 'ballot_box',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5f3.png?v8',
      },
      {
        name: 'ballot_box_with_check',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2611.png?v8',
      },
      {
        name: 'bamboo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f38d.png?v8',
      },
      {
        name: 'banana',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34c.png?v8',
      },
      {
        name: 'bangbang',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/203c.png?v8',
      },
      {
        name: 'bangladesh',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e9.png?v8',
      },
      {
        name: 'banjo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa95.png?v8',
      },
      {
        name: 'bank',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e6.png?v8',
      },
      {
        name: 'bar_chart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ca.png?v8',
      },
      {
        name: 'barbados',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e7.png?v8',
      },
      {
        name: 'barber',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f488.png?v8',
      },
      {
        name: 'baseball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26be.png?v8',
      },
      {
        name: 'basecamp',
        link: 'https://github.githubassets.com/images/icons/emoji/basecamp.png?v8',
      },
      {
        name: 'basecampy',
        link: 'https://github.githubassets.com/images/icons/emoji/basecampy.png?v8',
      },
      {
        name: 'basket',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9fa.png?v8',
      },
      {
        name: 'basketball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c0.png?v8',
      },
      {
        name: 'basketball_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f9-2642.png?v8',
      },
      {
        name: 'basketball_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f9-2640.png?v8',
      },
      {
        name: 'bat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f987.png?v8',
      },
      {
        name: 'bath',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6c0.png?v8',
      },
      {
        name: 'bathtub',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6c1.png?v8',
      },
      {
        name: 'battery',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f50b.png?v8',
      },
      {
        name: 'beach_umbrella',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d6.png?v8',
      },
      {
        name: 'bear',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png?v8',
      },
      {
        name: 'bearded_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d4.png?v8',
      },
      {
        name: 'beaver',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ab.png?v8',
      },
      {
        name: 'bed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6cf.png?v8',
      },
      {
        name: 'bee',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f41d.png?v8',
      },
      {
        name: 'beer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f37a.png?v8',
      },
      {
        name: 'beers',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f37b.png?v8',
      },
      {
        name: 'beetle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fab2.png?v8',
      },
      {
        name: 'beginner',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f530.png?v8',
      },
      {
        name: 'belarus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1fe.png?v8',
      },
      {
        name: 'belgium',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ea.png?v8',
      },
      {
        name: 'belize',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ff.png?v8',
      },
      {
        name: 'bell',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f514.png?v8',
      },
      {
        name: 'bell_pepper',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fad1.png?v8',
      },
      {
        name: 'bellhop_bell',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6ce.png?v8',
      },
      {
        name: 'benin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ef.png?v8',
      },
      {
        name: 'bento',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f371.png?v8',
      },
      {
        name: 'bermuda',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f2.png?v8',
      },
      {
        name: 'beverage_box',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c3.png?v8',
      },
      {
        name: 'bhutan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f9.png?v8',
      },
      {
        name: 'bicyclist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b4.png?v8',
      },
      {
        name: 'bike',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b2.png?v8',
      },
      {
        name: 'biking_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b4-2642.png?v8',
      },
      {
        name: 'biking_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b4-2640.png?v8',
      },
      {
        name: 'bikini',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f459.png?v8',
      },
      {
        name: 'billed_cap',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e2.png?v8',
      },
      {
        name: 'biohazard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2623.png?v8',
      },
      {
        name: 'bird',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f426.png?v8',
      },
      {
        name: 'birthday',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f382.png?v8',
      },
      {
        name: 'bison',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ac.png?v8',
      },
      {
        name: 'black_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f408-2b1b.png?v8',
      },
      {
        name: 'black_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26ab.png?v8',
      },
      {
        name: 'black_flag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f4.png?v8',
      },
      {
        name: 'black_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5a4.png?v8',
      },
      {
        name: 'black_joker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f0cf.png?v8',
      },
      {
        name: 'black_large_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2b1b.png?v8',
      },
      {
        name: 'black_medium_small_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25fe.png?v8',
      },
      {
        name: 'black_medium_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25fc.png?v8',
      },
      {
        name: 'black_nib',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2712.png?v8',
      },
      {
        name: 'black_small_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25aa.png?v8',
      },
      {
        name: 'black_square_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f532.png?v8',
      },
      {
        name: 'blond_haired_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f471-2642.png?v8',
      },
      {
        name: 'blond_haired_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f471.png?v8',
      },
      {
        name: 'blond_haired_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f471-2640.png?v8',
      },
      {
        name: 'blonde_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f471-2640.png?v8',
      },
      {
        name: 'blossom',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f33c.png?v8',
      },
      {
        name: 'blowfish',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f421.png?v8',
      },
      {
        name: 'blue_book',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d8.png?v8',
      },
      {
        name: 'blue_car',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f699.png?v8',
      },
      {
        name: 'blue_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f499.png?v8',
      },
      {
        name: 'blue_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e6.png?v8',
      },
      {
        name: 'blueberries',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fad0.png?v8',
      },
      {
        name: 'blush',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f60a.png?v8',
      },
      {
        name: 'boar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f417.png?v8',
      },
      {
        name: 'boat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f5.png?v8',
      },
      {
        name: 'bolivia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f4.png?v8',
      },
      {
        name: 'bomb',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a3.png?v8',
      },
      {
        name: 'bone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b4.png?v8',
      },
      {
        name: 'book',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png?v8',
      },
      {
        name: 'bookmark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f516.png?v8',
      },
      {
        name: 'bookmark_tabs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d1.png?v8',
      },
      {
        name: 'books',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4da.png?v8',
      },
      {
        name: 'boom',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a5.png?v8',
      },
      {
        name: 'boomerang',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa83.png?v8',
      },
      {
        name: 'boot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f462.png?v8',
      },
      {
        name: 'bosnia_herzegovina',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e6.png?v8',
      },
      {
        name: 'botswana',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1fc.png?v8',
      },
      {
        name: 'bouncing_ball_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f9-2642.png?v8',
      },
      {
        name: 'bouncing_ball_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f9.png?v8',
      },
      {
        name: 'bouncing_ball_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f9-2640.png?v8',
      },
      {
        name: 'bouquet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f490.png?v8',
      },
      {
        name: 'bouvet_island',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1fb.png?v8',
      },
      {
        name: 'bow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f647.png?v8',
      },
      {
        name: 'bow_and_arrow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f9.png?v8',
      },
      {
        name: 'bowing_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f647-2642.png?v8',
      },
      {
        name: 'bowing_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f647-2640.png?v8',
      },
      {
        name: 'bowl_with_spoon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f963.png?v8',
      },
      {
        name: 'bowling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b3.png?v8',
      },
      {
        name: 'bowtie',
        link: 'https://github.githubassets.com/images/icons/emoji/bowtie.png?v8',
      },
      {
        name: 'boxing_glove',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f94a.png?v8',
      },
      {
        name: 'boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f466.png?v8',
      },
      {
        name: 'brain',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e0.png?v8',
      },
      {
        name: 'brazil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f7.png?v8',
      },
      {
        name: 'bread',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f35e.png?v8',
      },
      {
        name: 'breast_feeding',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f931.png?v8',
      },
      {
        name: 'bricks',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f1.png?v8',
      },
      {
        name: 'bride_with_veil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f470-2640.png?v8',
      },
      {
        name: 'bridge_at_night',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f309.png?v8',
      },
      {
        name: 'briefcase',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4bc.png?v8',
      },
      {
        name: 'british_indian_ocean_territory',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f4.png?v8',
      },
      {
        name: 'british_virgin_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1ec.png?v8',
      },
      {
        name: 'broccoli',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f966.png?v8',
      },
      {
        name: 'broken_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f494.png?v8',
      },
      {
        name: 'broom',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f9.png?v8',
      },
      {
        name: 'brown_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e4.png?v8',
      },
      {
        name: 'brown_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f90e.png?v8',
      },
      {
        name: 'brown_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7eb.png?v8',
      },
      {
        name: 'brunei',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f3.png?v8',
      },
      {
        name: 'bubble_tea',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9cb.png?v8',
      },
      {
        name: 'bucket',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa3.png?v8',
      },
      {
        name: 'bug',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f41b.png?v8',
      },
      {
        name: 'building_construction',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d7.png?v8',
      },
      {
        name: 'bulb',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png?v8',
      },
      {
        name: 'bulgaria',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ec.png?v8',
      },
      {
        name: 'bullettrain_front',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f685.png?v8',
      },
      {
        name: 'bullettrain_side',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f684.png?v8',
      },
      {
        name: 'burkina_faso',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1eb.png?v8',
      },
      {
        name: 'burrito',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f32f.png?v8',
      },
      {
        name: 'burundi',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ee.png?v8',
      },
      {
        name: 'bus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f68c.png?v8',
      },
      {
        name: 'business_suit_levitating',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f574.png?v8',
      },
      {
        name: 'busstop',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f68f.png?v8',
      },
      {
        name: 'bust_in_silhouette',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f464.png?v8',
      },
      {
        name: 'busts_in_silhouette',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f465.png?v8',
      },
      {
        name: 'butter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c8.png?v8',
      },
      {
        name: 'butterfly',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f98b.png?v8',
      },
      {
        name: 'cactus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f335.png?v8',
      },
      {
        name: 'cake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f370.png?v8',
      },
      {
        name: 'calendar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c6.png?v8',
      },
      {
        name: 'call_me_hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f919.png?v8',
      },
      {
        name: 'calling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f2.png?v8',
      },
      {
        name: 'cambodia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ed.png?v8',
      },
      {
        name: 'camel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f42b.png?v8',
      },
      {
        name: 'camera',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f7.png?v8',
      },
      {
        name: 'camera_flash',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f8.png?v8',
      },
      {
        name: 'cameroon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f2.png?v8',
      },
      {
        name: 'camping',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d5.png?v8',
      },
      {
        name: 'canada',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1e6.png?v8',
      },
      {
        name: 'canary_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1e8.png?v8',
      },
      {
        name: 'cancer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/264b.png?v8',
      },
      {
        name: 'candle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f56f.png?v8',
      },
      {
        name: 'candy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f36c.png?v8',
      },
      {
        name: 'canned_food',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f96b.png?v8',
      },
      {
        name: 'canoe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f6.png?v8',
      },
      {
        name: 'cape_verde',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fb.png?v8',
      },
      {
        name: 'capital_abcd',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f520.png?v8',
      },
      {
        name: 'capricorn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2651.png?v8',
      },
      {
        name: 'car',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f697.png?v8',
      },
      {
        name: 'card_file_box',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5c3.png?v8',
      },
      {
        name: 'card_index',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c7.png?v8',
      },
      {
        name: 'card_index_dividers',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5c2.png?v8',
      },
      {
        name: 'caribbean_netherlands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f6.png?v8',
      },
      {
        name: 'carousel_horse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a0.png?v8',
      },
      {
        name: 'carpentry_saw',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa9a.png?v8',
      },
      {
        name: 'carrot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f955.png?v8',
      },
      {
        name: 'cartwheeling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f938.png?v8',
      },
      {
        name: 'cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f431.png?v8',
      },
      {
        name: 'cat2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f408.png?v8',
      },
      {
        name: 'cayman_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1fe.png?v8',
      },
      {
        name: 'cd',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4bf.png?v8',
      },
      {
        name: 'central_african_republic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1eb.png?v8',
      },
      {
        name: 'ceuta_melilla',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1e6.png?v8',
      },
      {
        name: 'chad',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1e9.png?v8',
      },
      {
        name: 'chains',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26d3.png?v8',
      },
      {
        name: 'chair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa91.png?v8',
      },
      {
        name: 'champagne',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f37e.png?v8',
      },
      {
        name: 'chart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b9.png?v8',
      },
      {
        name: 'chart_with_downwards_trend',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c9.png?v8',
      },
      {
        name: 'chart_with_upwards_trend',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png?v8',
      },
      {
        name: 'checkered_flag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c1.png?v8',
      },
      {
        name: 'cheese',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c0.png?v8',
      },
      {
        name: 'cherries',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f352.png?v8',
      },
      {
        name: 'cherry_blossom',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f338.png?v8',
      },
      {
        name: 'chess_pawn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/265f.png?v8',
      },
      {
        name: 'chestnut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f330.png?v8',
      },
      {
        name: 'chicken',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f414.png?v8',
      },
      {
        name: 'child',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d2.png?v8',
      },
      {
        name: 'children_crossing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b8.png?v8',
      },
      {
        name: 'chile',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f1.png?v8',
      },
      {
        name: 'chipmunk',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43f.png?v8',
      },
      {
        name: 'chocolate_bar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f36b.png?v8',
      },
      {
        name: 'chopsticks',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f962.png?v8',
      },
      {
        name: 'christmas_island',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fd.png?v8',
      },
      {
        name: 'christmas_tree',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f384.png?v8',
      },
      {
        name: 'church',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26ea.png?v8',
      },
      {
        name: 'cinema',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a6.png?v8',
      },
      {
        name: 'circus_tent',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3aa.png?v8',
      },
      {
        name: 'city_sunrise',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f307.png?v8',
      },
      {
        name: 'city_sunset',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f306.png?v8',
      },
      {
        name: 'cityscape',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d9.png?v8',
      },
      {
        name: 'cl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f191.png?v8',
      },
      {
        name: 'clamp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5dc.png?v8',
      },
      {
        name: 'clap',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44f.png?v8',
      },
      {
        name: 'clapper',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ac.png?v8',
      },
      {
        name: 'classical_building',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3db.png?v8',
      },
      {
        name: 'climbing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d7.png?v8',
      },
      {
        name: 'climbing_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d7-2642.png?v8',
      },
      {
        name: 'climbing_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d7-2640.png?v8',
      },
      {
        name: 'clinking_glasses',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f942.png?v8',
      },
      {
        name: 'clipboard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4cb.png?v8',
      },
      {
        name: 'clipperton_island',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f5.png?v8',
      },
      {
        name: 'clock1',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f550.png?v8',
      },
      {
        name: 'clock10',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f559.png?v8',
      },
      {
        name: 'clock1030',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f565.png?v8',
      },
      {
        name: 'clock11',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f55a.png?v8',
      },
      {
        name: 'clock1130',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f566.png?v8',
      },
      {
        name: 'clock12',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f55b.png?v8',
      },
      {
        name: 'clock1230',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f567.png?v8',
      },
      {
        name: 'clock130',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f55c.png?v8',
      },
      {
        name: 'clock2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f551.png?v8',
      },
      {
        name: 'clock230',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f55d.png?v8',
      },
      {
        name: 'clock3',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f552.png?v8',
      },
      {
        name: 'clock330',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f55e.png?v8',
      },
      {
        name: 'clock4',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f553.png?v8',
      },
      {
        name: 'clock430',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f55f.png?v8',
      },
      {
        name: 'clock5',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f554.png?v8',
      },
      {
        name: 'clock530',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f560.png?v8',
      },
      {
        name: 'clock6',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f555.png?v8',
      },
      {
        name: 'clock630',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f561.png?v8',
      },
      {
        name: 'clock7',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f556.png?v8',
      },
      {
        name: 'clock730',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f562.png?v8',
      },
      {
        name: 'clock8',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f557.png?v8',
      },
      {
        name: 'clock830',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f563.png?v8',
      },
      {
        name: 'clock9',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f558.png?v8',
      },
      {
        name: 'clock930',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f564.png?v8',
      },
      {
        name: 'closed_book',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d5.png?v8',
      },
      {
        name: 'closed_lock_with_key',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f510.png?v8',
      },
      {
        name: 'closed_umbrella',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f302.png?v8',
      },
      {
        name: 'cloud',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2601.png?v8',
      },
      {
        name: 'cloud_with_lightning',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f329.png?v8',
      },
      {
        name: 'cloud_with_lightning_and_rain',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26c8.png?v8',
      },
      {
        name: 'cloud_with_rain',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f327.png?v8',
      },
      {
        name: 'cloud_with_snow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f328.png?v8',
      },
      {
        name: 'clown_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f921.png?v8',
      },
      {
        name: 'clubs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2663.png?v8',
      },
      {
        name: 'cn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f3.png?v8',
      },
      {
        name: 'coat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e5.png?v8',
      },
      {
        name: 'cockroach',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fab3.png?v8',
      },
      {
        name: 'cocktail',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f378.png?v8',
      },
      {
        name: 'coconut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f965.png?v8',
      },
      {
        name: 'cocos_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1e8.png?v8',
      },
      {
        name: 'coffee',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2615.png?v8',
      },
      {
        name: 'coffin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26b0.png?v8',
      },
      {
        name: 'coin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa99.png?v8',
      },
      {
        name: 'cold_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f976.png?v8',
      },
      {
        name: 'cold_sweat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f630.png?v8',
      },
      {
        name: 'collision',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a5.png?v8',
      },
      {
        name: 'colombia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f4.png?v8',
      },
      {
        name: 'comet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2604.png?v8',
      },
      {
        name: 'comoros',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f2.png?v8',
      },
      {
        name: 'compass',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ed.png?v8',
      },
      {
        name: 'computer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png?v8',
      },
      {
        name: 'computer_mouse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5b1.png?v8',
      },
      {
        name: 'confetti_ball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f38a.png?v8',
      },
      {
        name: 'confounded',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f616.png?v8',
      },
      {
        name: 'confused',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f615.png?v8',
      },
      {
        name: 'congo_brazzaville',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ec.png?v8',
      },
      {
        name: 'congo_kinshasa',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1e9.png?v8',
      },
      {
        name: 'congratulations',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/3297.png?v8',
      },
      {
        name: 'construction',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a7.png?v8',
      },
      {
        name: 'construction_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f477.png?v8',
      },
      {
        name: 'construction_worker_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f477-2642.png?v8',
      },
      {
        name: 'construction_worker_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f477-2640.png?v8',
      },
      {
        name: 'control_knobs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f39b.png?v8',
      },
      {
        name: 'convenience_store',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ea.png?v8',
      },
      {
        name: 'cook',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f373.png?v8',
      },
      {
        name: 'cook_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f0.png?v8',
      },
      {
        name: 'cookie',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f36a.png?v8',
      },
      {
        name: 'cool',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f192.png?v8',
      },
      {
        name: 'cop',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46e.png?v8',
      },
      {
        name: 'copyright',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/00a9.png?v8',
      },
      {
        name: 'corn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f33d.png?v8',
      },
      {
        name: 'costa_rica',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f7.png?v8',
      },
      {
        name: 'cote_divoire',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ee.png?v8',
      },
      {
        name: 'couch_and_lamp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6cb.png?v8',
      },
      {
        name: 'couple',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46b.png?v8',
      },
      {
        name: 'couple_with_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f491.png?v8',
      },
      {
        name: 'couple_with_heart_man_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-2764-1f468.png?v8',
      },
      {
        name: 'couple_with_heart_woman_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f468.png?v8',
      },
      {
        name: 'couple_with_heart_woman_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f469.png?v8',
      },
      {
        name: 'couplekiss',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f48f.png?v8',
      },
      {
        name: 'couplekiss_man_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-2764-1f48b-1f468.png?v8',
      },
      {
        name: 'couplekiss_man_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f48b-1f468.png?v8',
      },
      {
        name: 'couplekiss_woman_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-2764-1f48b-1f469.png?v8',
      },
      {
        name: 'cow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f42e.png?v8',
      },
      {
        name: 'cow2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f404.png?v8',
      },
      {
        name: 'cowboy_hat_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f920.png?v8',
      },
      {
        name: 'crab',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f980.png?v8',
      },
      {
        name: 'crayon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f58d.png?v8',
      },
      {
        name: 'credit_card',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b3.png?v8',
      },
      {
        name: 'crescent_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f319.png?v8',
      },
      {
        name: 'cricket',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f997.png?v8',
      },
      {
        name: 'cricket_game',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cf.png?v8',
      },
      {
        name: 'croatia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f7.png?v8',
      },
      {
        name: 'crocodile',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f40a.png?v8',
      },
      {
        name: 'croissant',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f950.png?v8',
      },
      {
        name: 'crossed_fingers',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f91e.png?v8',
      },
      {
        name: 'crossed_flags',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f38c.png?v8',
      },
      {
        name: 'crossed_swords',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2694.png?v8',
      },
      {
        name: 'crown',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f451.png?v8',
      },
      {
        name: 'cry',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f622.png?v8',
      },
      {
        name: 'crying_cat_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f63f.png?v8',
      },
      {
        name: 'crystal_ball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png?v8',
      },
      {
        name: 'cuba',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fa.png?v8',
      },
      {
        name: 'cucumber',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f952.png?v8',
      },
      {
        name: 'cup_with_straw',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f964.png?v8',
      },
      {
        name: 'cupcake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c1.png?v8',
      },
      {
        name: 'cupid',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f498.png?v8',
      },
      {
        name: 'curacao',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fc.png?v8',
      },
      {
        name: 'curling_stone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f94c.png?v8',
      },
      {
        name: 'curly_haired_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b1.png?v8',
      },
      {
        name: 'curly_haired_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b1.png?v8',
      },
      {
        name: 'curly_loop',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/27b0.png?v8',
      },
      {
        name: 'currency_exchange',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b1.png?v8',
      },
      {
        name: 'curry',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f35b.png?v8',
      },
      {
        name: 'cursing_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f92c.png?v8',
      },
      {
        name: 'custard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f36e.png?v8',
      },
      {
        name: 'customs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6c3.png?v8',
      },
      {
        name: 'cut_of_meat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f969.png?v8',
      },
      {
        name: 'cyclone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f300.png?v8',
      },
      {
        name: 'cyprus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1fe.png?v8',
      },
      {
        name: 'czech_republic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ff.png?v8',
      },
      {
        name: 'dagger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5e1.png?v8',
      },
      {
        name: 'dancer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f483.png?v8',
      },
      {
        name: 'dancers',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46f.png?v8',
      },
      {
        name: 'dancing_men',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46f-2642.png?v8',
      },
      {
        name: 'dancing_women',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46f-2640.png?v8',
      },
      {
        name: 'dango',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f361.png?v8',
      },
      {
        name: 'dark_sunglasses',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f576.png?v8',
      },
      {
        name: 'dart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png?v8',
      },
      {
        name: 'dash',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a8.png?v8',
      },
      {
        name: 'date',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c5.png?v8',
      },
      {
        name: 'de',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ea.png?v8',
      },
      {
        name: 'deaf_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9cf-2642.png?v8',
      },
      {
        name: 'deaf_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9cf.png?v8',
      },
      {
        name: 'deaf_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9cf-2640.png?v8',
      },
      {
        name: 'deciduous_tree',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f333.png?v8',
      },
      {
        name: 'deer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f98c.png?v8',
      },
      {
        name: 'denmark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1f0.png?v8',
      },
      {
        name: 'department_store',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ec.png?v8',
      },
      {
        name: 'derelict_house',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3da.png?v8',
      },
      {
        name: 'desert',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3dc.png?v8',
      },
      {
        name: 'desert_island',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3dd.png?v8',
      },
      {
        name: 'desktop_computer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5a5.png?v8',
      },
      {
        name: 'detective',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f575.png?v8',
      },
      {
        name: 'diamond_shape_with_a_dot_inside',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a0.png?v8',
      },
      {
        name: 'diamonds',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2666.png?v8',
      },
      {
        name: 'diego_garcia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ec.png?v8',
      },
      {
        name: 'disappointed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f61e.png?v8',
      },
      {
        name: 'disappointed_relieved',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f625.png?v8',
      },
      {
        name: 'disguised_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f978.png?v8',
      },
      {
        name: 'diving_mask',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93f.png?v8',
      },
      {
        name: 'diya_lamp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa94.png?v8',
      },
      {
        name: 'dizzy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ab.png?v8',
      },
      {
        name: 'dizzy_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f635.png?v8',
      },
      {
        name: 'djibouti',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ef.png?v8',
      },
      {
        name: 'dna',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ec.png?v8',
      },
      {
        name: 'do_not_litter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6af.png?v8',
      },
      {
        name: 'dodo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a4.png?v8',
      },
      {
        name: 'dog',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f436.png?v8',
      },
      {
        name: 'dog2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f415.png?v8',
      },
      {
        name: 'dollar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b5.png?v8',
      },
      {
        name: 'dolls',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f38e.png?v8',
      },
      {
        name: 'dolphin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f42c.png?v8',
      },
      {
        name: 'dominica',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1f2.png?v8',
      },
      {
        name: 'dominican_republic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1f4.png?v8',
      },
      {
        name: 'door',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6aa.png?v8',
      },
      {
        name: 'doughnut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f369.png?v8',
      },
      {
        name: 'dove',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f54a.png?v8',
      },
      {
        name: 'dragon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f409.png?v8',
      },
      {
        name: 'dragon_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f432.png?v8',
      },
      {
        name: 'dress',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f457.png?v8',
      },
      {
        name: 'dromedary_camel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f42a.png?v8',
      },
      {
        name: 'drooling_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f924.png?v8',
      },
      {
        name: 'drop_of_blood',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa78.png?v8',
      },
      {
        name: 'droplet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a7.png?v8',
      },
      {
        name: 'drum',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f941.png?v8',
      },
      {
        name: 'duck',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f986.png?v8',
      },
      {
        name: 'dumpling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f95f.png?v8',
      },
      {
        name: 'dvd',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c0.png?v8',
      },
      {
        name: 'e-mail',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e7.png?v8',
      },
      {
        name: 'eagle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f985.png?v8',
      },
      {
        name: 'ear',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f442.png?v8',
      },
      {
        name: 'ear_of_rice',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f33e.png?v8',
      },
      {
        name: 'ear_with_hearing_aid',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9bb.png?v8',
      },
      {
        name: 'earth_africa',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f30d.png?v8',
      },
      {
        name: 'earth_americas',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f30e.png?v8',
      },
      {
        name: 'earth_asia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f30f.png?v8',
      },
      {
        name: 'ecuador',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1e8.png?v8',
      },
      {
        name: 'egg',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f95a.png?v8',
      },
      {
        name: 'eggplant',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f346.png?v8',
      },
      {
        name: 'egypt',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1ec.png?v8',
      },
      {
        name: 'eight',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0038-20e3.png?v8',
      },
      {
        name: 'eight_pointed_black_star',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2734.png?v8',
      },
      {
        name: 'eight_spoked_asterisk',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2733.png?v8',
      },
      {
        name: 'eject_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23cf.png?v8',
      },
      {
        name: 'el_salvador',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1fb.png?v8',
      },
      {
        name: 'electric_plug',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f50c.png?v8',
      },
      {
        name: 'electron',
        link: 'https://github.githubassets.com/images/icons/emoji/electron.png?v8',
      },
      {
        name: 'elephant',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f418.png?v8',
      },
      {
        name: 'elevator',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6d7.png?v8',
      },
      {
        name: 'elf',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9dd.png?v8',
      },
      {
        name: 'elf_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9dd-2642.png?v8',
      },
      {
        name: 'elf_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9dd-2640.png?v8',
      },
      {
        name: 'email',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e7.png?v8',
      },
      {
        name: 'end',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f51a.png?v8',
      },
      {
        name: 'england',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png?v8',
      },
      {
        name: 'envelope',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2709.png?v8',
      },
      {
        name: 'envelope_with_arrow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e9.png?v8',
      },
      {
        name: 'equatorial_guinea',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f6.png?v8',
      },
      {
        name: 'eritrea',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f7.png?v8',
      },
      {
        name: 'es',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f8.png?v8',
      },
      {
        name: 'estonia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1ea.png?v8',
      },
      {
        name: 'ethiopia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f9.png?v8',
      },
      {
        name: 'eu',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1fa.png?v8',
      },
      {
        name: 'euro',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b6.png?v8',
      },
      {
        name: 'european_castle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f0.png?v8',
      },
      {
        name: 'european_post_office',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e4.png?v8',
      },
      {
        name: 'european_union',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1fa.png?v8',
      },
      {
        name: 'evergreen_tree',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f332.png?v8',
      },
      {
        name: 'exclamation',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2757.png?v8',
      },
      {
        name: 'exploding_head',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f92f.png?v8',
      },
      {
        name: 'expressionless',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f611.png?v8',
      },
      {
        name: 'eye',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f441.png?v8',
      },
      {
        name: 'eye_speech_bubble',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f441-1f5e8.png?v8',
      },
      {
        name: 'eyeglasses',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f453.png?v8',
      },
      {
        name: 'eyes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f440.png?v8',
      },
      {
        name: 'face_exhaling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f62e-1f4a8.png?v8',
      },
      {
        name: 'face_in_clouds',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f636-1f32b.png?v8',
      },
      {
        name: 'face_with_head_bandage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f915.png?v8',
      },
      {
        name: 'face_with_spiral_eyes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f635-1f4ab.png?v8',
      },
      {
        name: 'face_with_thermometer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f912.png?v8',
      },
      {
        name: 'facepalm',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f926.png?v8',
      },
      {
        name: 'facepunch',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44a.png?v8',
      },
      {
        name: 'factory',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ed.png?v8',
      },
      {
        name: 'factory_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3ed.png?v8',
      },
      {
        name: 'fairy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9da.png?v8',
      },
      {
        name: 'fairy_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9da-2642.png?v8',
      },
      {
        name: 'fairy_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9da-2640.png?v8',
      },
      {
        name: 'falafel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c6.png?v8',
      },
      {
        name: 'falkland_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f0.png?v8',
      },
      {
        name: 'fallen_leaf',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f342.png?v8',
      },
      {
        name: 'family',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46a.png?v8',
      },
      {
        name: 'family_man_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f466.png?v8',
      },
      {
        name: 'family_man_boy_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f466-1f466.png?v8',
      },
      {
        name: 'family_man_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f467.png?v8',
      },
      {
        name: 'family_man_girl_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f467-1f466.png?v8',
      },
      {
        name: 'family_man_girl_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f467-1f467.png?v8',
      },
      {
        name: 'family_man_man_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f466.png?v8',
      },
      {
        name: 'family_man_man_boy_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f466-1f466.png?v8',
      },
      {
        name: 'family_man_man_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f467.png?v8',
      },
      {
        name: 'family_man_man_girl_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f466.png?v8',
      },
      {
        name: 'family_man_man_girl_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f467.png?v8',
      },
      {
        name: 'family_man_woman_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f466.png?v8',
      },
      {
        name: 'family_man_woman_boy_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f466-1f466.png?v8',
      },
      {
        name: 'family_man_woman_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f467.png?v8',
      },
      {
        name: 'family_man_woman_girl_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f466.png?v8',
      },
      {
        name: 'family_man_woman_girl_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f467.png?v8',
      },
      {
        name: 'family_woman_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f466.png?v8',
      },
      {
        name: 'family_woman_boy_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f466-1f466.png?v8',
      },
      {
        name: 'family_woman_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f467.png?v8',
      },
      {
        name: 'family_woman_girl_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f467-1f466.png?v8',
      },
      {
        name: 'family_woman_girl_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f467-1f467.png?v8',
      },
      {
        name: 'family_woman_woman_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f466.png?v8',
      },
      {
        name: 'family_woman_woman_boy_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f466-1f466.png?v8',
      },
      {
        name: 'family_woman_woman_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f467.png?v8',
      },
      {
        name: 'family_woman_woman_girl_boy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f466.png?v8',
      },
      {
        name: 'family_woman_woman_girl_girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f467.png?v8',
      },
      {
        name: 'farmer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f33e.png?v8',
      },
      {
        name: 'faroe_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f4.png?v8',
      },
      {
        name: 'fast_forward',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23e9.png?v8',
      },
      {
        name: 'fax',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e0.png?v8',
      },
      {
        name: 'fearful',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f628.png?v8',
      },
      {
        name: 'feather',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fab6.png?v8',
      },
      {
        name: 'feelsgood',
        link: 'https://github.githubassets.com/images/icons/emoji/feelsgood.png?v8',
      },
      {
        name: 'feet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43e.png?v8',
      },
      {
        name: 'female_detective',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f575-2640.png?v8',
      },
      {
        name: 'female_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2640.png?v8',
      },
      {
        name: 'ferris_wheel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a1.png?v8',
      },
      {
        name: 'ferry',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f4.png?v8',
      },
      {
        name: 'field_hockey',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d1.png?v8',
      },
      {
        name: 'fiji',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1ef.png?v8',
      },
      {
        name: 'file_cabinet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5c4.png?v8',
      },
      {
        name: 'file_folder',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c1.png?v8',
      },
      {
        name: 'film_projector',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4fd.png?v8',
      },
      {
        name: 'film_strip',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f39e.png?v8',
      },
      {
        name: 'finland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1ee.png?v8',
      },
      {
        name: 'finnadie',
        link: 'https://github.githubassets.com/images/icons/emoji/finnadie.png?v8',
      },
      {
        name: 'fire',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f525.png?v8',
      },
      {
        name: 'fire_engine',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f692.png?v8',
      },
      {
        name: 'fire_extinguisher',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ef.png?v8',
      },
      {
        name: 'firecracker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e8.png?v8',
      },
      {
        name: 'firefighter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f692.png?v8',
      },
      {
        name: 'fireworks',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f386.png?v8',
      },
      {
        name: 'first_quarter_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f313.png?v8',
      },
      {
        name: 'first_quarter_moon_with_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f31b.png?v8',
      },
      {
        name: 'fish',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f41f.png?v8',
      },
      {
        name: 'fish_cake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f365.png?v8',
      },
      {
        name: 'fishing_pole_and_fish',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a3.png?v8',
      },
      {
        name: 'fist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/270a.png?v8',
      },
      {
        name: 'fist_left',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f91b.png?v8',
      },
      {
        name: 'fist_oncoming',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44a.png?v8',
      },
      {
        name: 'fist_raised',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/270a.png?v8',
      },
      {
        name: 'fist_right',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f91c.png?v8',
      },
      {
        name: 'five',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0035-20e3.png?v8',
      },
      {
        name: 'flags',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f38f.png?v8',
      },
      {
        name: 'flamingo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a9.png?v8',
      },
      {
        name: 'flashlight',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f526.png?v8',
      },
      {
        name: 'flat_shoe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f97f.png?v8',
      },
      {
        name: 'flatbread',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fad3.png?v8',
      },
      {
        name: 'fleur_de_lis',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/269c.png?v8',
      },
      {
        name: 'flight_arrival',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6ec.png?v8',
      },
      {
        name: 'flight_departure',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6eb.png?v8',
      },
      {
        name: 'flipper',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f42c.png?v8',
      },
      {
        name: 'floppy_disk',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4be.png?v8',
      },
      {
        name: 'flower_playing_cards',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b4.png?v8',
      },
      {
        name: 'flushed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f633.png?v8',
      },
      {
        name: 'fly',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fab0.png?v8',
      },
      {
        name: 'flying_disc',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f94f.png?v8',
      },
      {
        name: 'flying_saucer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f8.png?v8',
      },
      {
        name: 'fog',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f32b.png?v8',
      },
      {
        name: 'foggy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f301.png?v8',
      },
      {
        name: 'fondue',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fad5.png?v8',
      },
      {
        name: 'foot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b6.png?v8',
      },
      {
        name: 'football',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c8.png?v8',
      },
      {
        name: 'footprints',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f463.png?v8',
      },
      {
        name: 'fork_and_knife',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f374.png?v8',
      },
      {
        name: 'fortune_cookie',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f960.png?v8',
      },
      {
        name: 'fountain',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f2.png?v8',
      },
      {
        name: 'fountain_pen',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f58b.png?v8',
      },
      {
        name: 'four',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0034-20e3.png?v8',
      },
      {
        name: 'four_leaf_clover',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f340.png?v8',
      },
      {
        name: 'fox_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f98a.png?v8',
      },
      {
        name: 'fr',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f7.png?v8',
      },
      {
        name: 'framed_picture',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5bc.png?v8',
      },
      {
        name: 'free',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f193.png?v8',
      },
      {
        name: 'french_guiana',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1eb.png?v8',
      },
      {
        name: 'french_polynesia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1eb.png?v8',
      },
      {
        name: 'french_southern_territories',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1eb.png?v8',
      },
      {
        name: 'fried_egg',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f373.png?v8',
      },
      {
        name: 'fried_shrimp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f364.png?v8',
      },
      {
        name: 'fries',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f35f.png?v8',
      },
      {
        name: 'frog',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f438.png?v8',
      },
      {
        name: 'frowning',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f626.png?v8',
      },
      {
        name: 'frowning_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2639.png?v8',
      },
      {
        name: 'frowning_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64d-2642.png?v8',
      },
      {
        name: 'frowning_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64d.png?v8',
      },
      {
        name: 'frowning_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64d-2640.png?v8',
      },
      {
        name: 'fu',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f595.png?v8',
      },
      {
        name: 'fuelpump',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26fd.png?v8',
      },
      {
        name: 'full_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f315.png?v8',
      },
      {
        name: 'full_moon_with_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f31d.png?v8',
      },
      {
        name: 'funeral_urn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26b1.png?v8',
      },
      {
        name: 'gabon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e6.png?v8',
      },
      {
        name: 'gambia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f2.png?v8',
      },
      {
        name: 'game_die',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b2.png?v8',
      },
      {
        name: 'garlic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c4.png?v8',
      },
      {
        name: 'gb',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e7.png?v8',
      },
      {
        name: 'gear',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2699.png?v8',
      },
      {
        name: 'gem',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f48e.png?v8',
      },
      {
        name: 'gemini',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/264a.png?v8',
      },
      {
        name: 'genie',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9de.png?v8',
      },
      {
        name: 'genie_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9de-2642.png?v8',
      },
      {
        name: 'genie_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9de-2640.png?v8',
      },
      {
        name: 'georgia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ea.png?v8',
      },
      {
        name: 'ghana',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ed.png?v8',
      },
      {
        name: 'ghost',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f47b.png?v8',
      },
      {
        name: 'gibraltar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ee.png?v8',
      },
      {
        name: 'gift',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f381.png?v8',
      },
      {
        name: 'gift_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f49d.png?v8',
      },
      {
        name: 'giraffe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f992.png?v8',
      },
      {
        name: 'girl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f467.png?v8',
      },
      {
        name: 'globe_with_meridians',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f310.png?v8',
      },
      {
        name: 'gloves',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e4.png?v8',
      },
      {
        name: 'goal_net',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f945.png?v8',
      },
      {
        name: 'goat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f410.png?v8',
      },
      {
        name: 'goberserk',
        link: 'https://github.githubassets.com/images/icons/emoji/goberserk.png?v8',
      },
      {
        name: 'godmode',
        link: 'https://github.githubassets.com/images/icons/emoji/godmode.png?v8',
      },
      {
        name: 'goggles',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f97d.png?v8',
      },
      {
        name: 'golf',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f3.png?v8',
      },
      {
        name: 'golfing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cc.png?v8',
      },
      {
        name: 'golfing_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cc-2642.png?v8',
      },
      {
        name: 'golfing_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cc-2640.png?v8',
      },
      {
        name: 'gorilla',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f98d.png?v8',
      },
      {
        name: 'grapes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f347.png?v8',
      },
      {
        name: 'greece',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f7.png?v8',
      },
      {
        name: 'green_apple',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34f.png?v8',
      },
      {
        name: 'green_book',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d7.png?v8',
      },
      {
        name: 'green_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e2.png?v8',
      },
      {
        name: 'green_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f49a.png?v8',
      },
      {
        name: 'green_salad',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f957.png?v8',
      },
      {
        name: 'green_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e9.png?v8',
      },
      {
        name: 'greenland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f1.png?v8',
      },
      {
        name: 'grenada',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e9.png?v8',
      },
      {
        name: 'grey_exclamation',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2755.png?v8',
      },
      {
        name: 'grey_question',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2754.png?v8',
      },
      {
        name: 'grimacing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f62c.png?v8',
      },
      {
        name: 'grin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f601.png?v8',
      },
      {
        name: 'grinning',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f600.png?v8',
      },
      {
        name: 'guadeloupe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f5.png?v8',
      },
      {
        name: 'guam',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1fa.png?v8',
      },
      {
        name: 'guard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f482.png?v8',
      },
      {
        name: 'guardsman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f482-2642.png?v8',
      },
      {
        name: 'guardswoman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f482-2640.png?v8',
      },
      {
        name: 'guatemala',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f9.png?v8',
      },
      {
        name: 'guernsey',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1ec.png?v8',
      },
      {
        name: 'guide_dog',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ae.png?v8',
      },
      {
        name: 'guinea',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f3.png?v8',
      },
      {
        name: 'guinea_bissau',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1fc.png?v8',
      },
      {
        name: 'guitar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b8.png?v8',
      },
      {
        name: 'gun',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52b.png?v8',
      },
      {
        name: 'guyana',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1fe.png?v8',
      },
      {
        name: 'haircut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f487.png?v8',
      },
      {
        name: 'haircut_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f487-2642.png?v8',
      },
      {
        name: 'haircut_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f487-2640.png?v8',
      },
      {
        name: 'haiti',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f9.png?v8',
      },
      {
        name: 'hamburger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f354.png?v8',
      },
      {
        name: 'hammer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f528.png?v8',
      },
      {
        name: 'hammer_and_pick',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2692.png?v8',
      },
      {
        name: 'hammer_and_wrench',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png?v8',
      },
      {
        name: 'hamster',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f439.png?v8',
      },
      {
        name: 'hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/270b.png?v8',
      },
      {
        name: 'hand_over_mouth',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f92d.png?v8',
      },
      {
        name: 'handbag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f45c.png?v8',
      },
      {
        name: 'handball_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93e.png?v8',
      },
      {
        name: 'handshake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f91d.png?v8',
      },
      {
        name: 'hankey',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png?v8',
      },
      {
        name: 'hash',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0023-20e3.png?v8',
      },
      {
        name: 'hatched_chick',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f425.png?v8',
      },
      {
        name: 'hatching_chick',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f423.png?v8',
      },
      {
        name: 'headphones',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a7.png?v8',
      },
      {
        name: 'headstone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa6.png?v8',
      },
      {
        name: 'health_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-2695.png?v8',
      },
      {
        name: 'hear_no_evil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f649.png?v8',
      },
      {
        name: 'heard_mcdonald_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f2.png?v8',
      },
      {
        name: 'heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2764.png?v8',
      },
      {
        name: 'heart_decoration',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f49f.png?v8',
      },
      {
        name: 'heart_eyes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f60d.png?v8',
      },
      {
        name: 'heart_eyes_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f63b.png?v8',
      },
      {
        name: 'heart_on_fire',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2764-1f525.png?v8',
      },
      {
        name: 'heartbeat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f493.png?v8',
      },
      {
        name: 'heartpulse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f497.png?v8',
      },
      {
        name: 'hearts',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2665.png?v8',
      },
      {
        name: 'heavy_check_mark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2714.png?v8',
      },
      {
        name: 'heavy_division_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2797.png?v8',
      },
      {
        name: 'heavy_dollar_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b2.png?v8',
      },
      {
        name: 'heavy_exclamation_mark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2757.png?v8',
      },
      {
        name: 'heavy_heart_exclamation',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2763.png?v8',
      },
      {
        name: 'heavy_minus_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2796.png?v8',
      },
      {
        name: 'heavy_multiplication_x',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2716.png?v8',
      },
      {
        name: 'heavy_plus_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2795.png?v8',
      },
      {
        name: 'hedgehog',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f994.png?v8',
      },
      {
        name: 'helicopter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f681.png?v8',
      },
      {
        name: 'herb',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f33f.png?v8',
      },
      {
        name: 'hibiscus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f33a.png?v8',
      },
      {
        name: 'high_brightness',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f506.png?v8',
      },
      {
        name: 'high_heel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f460.png?v8',
      },
      {
        name: 'hiking_boot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f97e.png?v8',
      },
      {
        name: 'hindu_temple',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6d5.png?v8',
      },
      {
        name: 'hippopotamus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f99b.png?v8',
      },
      {
        name: 'hocho',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52a.png?v8',
      },
      {
        name: 'hole',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f573.png?v8',
      },
      {
        name: 'honduras',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f3.png?v8',
      },
      {
        name: 'honey_pot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f36f.png?v8',
      },
      {
        name: 'honeybee',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f41d.png?v8',
      },
      {
        name: 'hong_kong',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f0.png?v8',
      },
      {
        name: 'hook',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa9d.png?v8',
      },
      {
        name: 'horse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f434.png?v8',
      },
      {
        name: 'horse_racing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c7.png?v8',
      },
      {
        name: 'hospital',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e5.png?v8',
      },
      {
        name: 'hot_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f975.png?v8',
      },
      {
        name: 'hot_pepper',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f336.png?v8',
      },
      {
        name: 'hotdog',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f32d.png?v8',
      },
      {
        name: 'hotel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e8.png?v8',
      },
      {
        name: 'hotsprings',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2668.png?v8',
      },
      {
        name: 'hourglass',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/231b.png?v8',
      },
      {
        name: 'hourglass_flowing_sand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23f3.png?v8',
      },
      {
        name: 'house',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png?v8',
      },
      {
        name: 'house_with_garden',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e1.png?v8',
      },
      {
        name: 'houses',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d8.png?v8',
      },
      {
        name: 'hugs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f917.png?v8',
      },
      {
        name: 'hungary',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1fa.png?v8',
      },
      {
        name: 'hurtrealbad',
        link: 'https://github.githubassets.com/images/icons/emoji/hurtrealbad.png?v8',
      },
      {
        name: 'hushed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f62f.png?v8',
      },
      {
        name: 'hut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6d6.png?v8',
      },
      {
        name: 'ice_cream',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f368.png?v8',
      },
      {
        name: 'ice_cube',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ca.png?v8',
      },
      {
        name: 'ice_hockey',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d2.png?v8',
      },
      {
        name: 'ice_skate',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f8.png?v8',
      },
      {
        name: 'icecream',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f366.png?v8',
      },
      {
        name: 'iceland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f8.png?v8',
      },
      {
        name: 'id',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f194.png?v8',
      },
      {
        name: 'ideograph_advantage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f250.png?v8',
      },
      {
        name: 'imp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f47f.png?v8',
      },
      {
        name: 'inbox_tray',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e5.png?v8',
      },
      {
        name: 'incoming_envelope',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e8.png?v8',
      },
      {
        name: 'india',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f3.png?v8',
      },
      {
        name: 'indonesia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1e9.png?v8',
      },
      {
        name: 'infinity',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/267e.png?v8',
      },
      {
        name: 'information_desk_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f481.png?v8',
      },
      {
        name: 'information_source',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2139.png?v8',
      },
      {
        name: 'innocent',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f607.png?v8',
      },
      {
        name: 'interrobang',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2049.png?v8',
      },
      {
        name: 'iphone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f1.png?v8',
      },
      {
        name: 'iran',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f7.png?v8',
      },
      {
        name: 'iraq',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f6.png?v8',
      },
      {
        name: 'ireland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1ea.png?v8',
      },
      {
        name: 'isle_of_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f2.png?v8',
      },
      {
        name: 'israel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f1.png?v8',
      },
      {
        name: 'it',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ee-1f1f9.png?v8',
      },
      {
        name: 'izakaya_lantern',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ee.png?v8',
      },
      {
        name: 'jack_o_lantern',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f383.png?v8',
      },
      {
        name: 'jamaica',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1f2.png?v8',
      },
      {
        name: 'japan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5fe.png?v8',
      },
      {
        name: 'japanese_castle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ef.png?v8',
      },
      {
        name: 'japanese_goblin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f47a.png?v8',
      },
      {
        name: 'japanese_ogre',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f479.png?v8',
      },
      {
        name: 'jeans',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f456.png?v8',
      },
      {
        name: 'jersey',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1ea.png?v8',
      },
      {
        name: 'jigsaw',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e9.png?v8',
      },
      {
        name: 'jordan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1f4.png?v8',
      },
      {
        name: 'joy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f602.png?v8',
      },
      {
        name: 'joy_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f639.png?v8',
      },
      {
        name: 'joystick',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f579.png?v8',
      },
      {
        name: 'jp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ef-1f1f5.png?v8',
      },
      {
        name: 'judge',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-2696.png?v8',
      },
      {
        name: 'juggling_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f939.png?v8',
      },
      {
        name: 'kaaba',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f54b.png?v8',
      },
      {
        name: 'kangaroo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f998.png?v8',
      },
      {
        name: 'kazakhstan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ff.png?v8',
      },
      {
        name: 'kenya',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ea.png?v8',
      },
      {
        name: 'key',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f511.png?v8',
      },
      {
        name: 'keyboard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2328.png?v8',
      },
      {
        name: 'keycap_ten',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f51f.png?v8',
      },
      {
        name: 'kick_scooter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f4.png?v8',
      },
      {
        name: 'kimono',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f458.png?v8',
      },
      {
        name: 'kiribati',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ee.png?v8',
      },
      {
        name: 'kiss',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f48b.png?v8',
      },
      {
        name: 'kissing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f617.png?v8',
      },
      {
        name: 'kissing_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f63d.png?v8',
      },
      {
        name: 'kissing_closed_eyes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f61a.png?v8',
      },
      {
        name: 'kissing_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f618.png?v8',
      },
      {
        name: 'kissing_smiling_eyes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f619.png?v8',
      },
      {
        name: 'kite',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa81.png?v8',
      },
      {
        name: 'kiwi_fruit',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f95d.png?v8',
      },
      {
        name: 'kneeling_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ce-2642.png?v8',
      },
      {
        name: 'kneeling_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ce.png?v8',
      },
      {
        name: 'kneeling_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ce-2640.png?v8',
      },
      {
        name: 'knife',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52a.png?v8',
      },
      {
        name: 'knot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa2.png?v8',
      },
      {
        name: 'koala',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f428.png?v8',
      },
      {
        name: 'koko',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f201.png?v8',
      },
      {
        name: 'kosovo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fd-1f1f0.png?v8',
      },
      {
        name: 'kr',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f7.png?v8',
      },
      {
        name: 'kuwait',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1fc.png?v8',
      },
      {
        name: 'kyrgyzstan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1ec.png?v8',
      },
      {
        name: 'lab_coat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f97c.png?v8',
      },
      {
        name: 'label',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f7.png?v8',
      },
      {
        name: 'lacrosse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f94d.png?v8',
      },
      {
        name: 'ladder',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa9c.png?v8',
      },
      {
        name: 'lady_beetle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f41e.png?v8',
      },
      {
        name: 'lantern',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ee.png?v8',
      },
      {
        name: 'laos',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1e6.png?v8',
      },
      {
        name: 'large_blue_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f535.png?v8',
      },
      {
        name: 'large_blue_diamond',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f537.png?v8',
      },
      {
        name: 'large_orange_diamond',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f536.png?v8',
      },
      {
        name: 'last_quarter_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f317.png?v8',
      },
      {
        name: 'last_quarter_moon_with_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f31c.png?v8',
      },
      {
        name: 'latin_cross',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/271d.png?v8',
      },
      {
        name: 'latvia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1fb.png?v8',
      },
      {
        name: 'laughing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f606.png?v8',
      },
      {
        name: 'leafy_green',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f96c.png?v8',
      },
      {
        name: 'leaves',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f343.png?v8',
      },
      {
        name: 'lebanon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1e7.png?v8',
      },
      {
        name: 'ledger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d2.png?v8',
      },
      {
        name: 'left_luggage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6c5.png?v8',
      },
      {
        name: 'left_right_arrow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2194.png?v8',
      },
      {
        name: 'left_speech_bubble',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5e8.png?v8',
      },
      {
        name: 'leftwards_arrow_with_hook',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/21a9.png?v8',
      },
      {
        name: 'leg',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b5.png?v8',
      },
      {
        name: 'lemon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34b.png?v8',
      },
      {
        name: 'leo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/264c.png?v8',
      },
      {
        name: 'leopard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f406.png?v8',
      },
      {
        name: 'lesotho',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f8.png?v8',
      },
      {
        name: 'level_slider',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f39a.png?v8',
      },
      {
        name: 'liberia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f7.png?v8',
      },
      {
        name: 'libra',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/264e.png?v8',
      },
      {
        name: 'libya',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1fe.png?v8',
      },
      {
        name: 'liechtenstein',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1ee.png?v8',
      },
      {
        name: 'light_rail',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f688.png?v8',
      },
      {
        name: 'link',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f517.png?v8',
      },
      {
        name: 'lion',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f981.png?v8',
      },
      {
        name: 'lips',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f444.png?v8',
      },
      {
        name: 'lipstick',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f484.png?v8',
      },
      {
        name: 'lithuania',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f9.png?v8',
      },
      {
        name: 'lizard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f98e.png?v8',
      },
      {
        name: 'llama',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f999.png?v8',
      },
      {
        name: 'lobster',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f99e.png?v8',
      },
      {
        name: 'lock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f512.png?v8',
      },
      {
        name: 'lock_with_ink_pen',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f50f.png?v8',
      },
      {
        name: 'lollipop',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f36d.png?v8',
      },
      {
        name: 'long_drum',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa98.png?v8',
      },
      {
        name: 'loop',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/27bf.png?v8',
      },
      {
        name: 'lotion_bottle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f4.png?v8',
      },
      {
        name: 'lotus_position',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d8.png?v8',
      },
      {
        name: 'lotus_position_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d8-2642.png?v8',
      },
      {
        name: 'lotus_position_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d8-2640.png?v8',
      },
      {
        name: 'loud_sound',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f50a.png?v8',
      },
      {
        name: 'loudspeaker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png?v8',
      },
      {
        name: 'love_hotel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e9.png?v8',
      },
      {
        name: 'love_letter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f48c.png?v8',
      },
      {
        name: 'love_you_gesture',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f91f.png?v8',
      },
      {
        name: 'low_brightness',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f505.png?v8',
      },
      {
        name: 'luggage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f3.png?v8',
      },
      {
        name: 'lungs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fac1.png?v8',
      },
      {
        name: 'luxembourg',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1fa.png?v8',
      },
      {
        name: 'lying_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f925.png?v8',
      },
      {
        name: 'm',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/24c2.png?v8',
      },
      {
        name: 'macau',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f4.png?v8',
      },
      {
        name: 'macedonia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f0.png?v8',
      },
      {
        name: 'madagascar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ec.png?v8',
      },
      {
        name: 'mag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f50d.png?v8',
      },
      {
        name: 'mag_right',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f50e.png?v8',
      },
      {
        name: 'mage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d9.png?v8',
      },
      {
        name: 'mage_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d9-2642.png?v8',
      },
      {
        name: 'mage_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d9-2640.png?v8',
      },
      {
        name: 'magic_wand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa84.png?v8',
      },
      {
        name: 'magnet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f2.png?v8',
      },
      {
        name: 'mahjong',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f004.png?v8',
      },
      {
        name: 'mailbox',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4eb.png?v8',
      },
      {
        name: 'mailbox_closed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ea.png?v8',
      },
      {
        name: 'mailbox_with_mail',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ec.png?v8',
      },
      {
        name: 'mailbox_with_no_mail',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ed.png?v8',
      },
      {
        name: 'malawi',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fc.png?v8',
      },
      {
        name: 'malaysia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fe.png?v8',
      },
      {
        name: 'maldives',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fb.png?v8',
      },
      {
        name: 'male_detective',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f575-2642.png?v8',
      },
      {
        name: 'male_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2642.png?v8',
      },
      {
        name: 'mali',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f1.png?v8',
      },
      {
        name: 'malta',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f9.png?v8',
      },
      {
        name: 'mammoth',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a3.png?v8',
      },
      {
        name: 'man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468.png?v8',
      },
      {
        name: 'man_artist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3a8.png?v8',
      },
      {
        name: 'man_astronaut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f680.png?v8',
      },
      {
        name: 'man_beard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d4-2642.png?v8',
      },
      {
        name: 'man_cartwheeling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f938-2642.png?v8',
      },
      {
        name: 'man_cook',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f373.png?v8',
      },
      {
        name: 'man_dancing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f57a.png?v8',
      },
      {
        name: 'man_facepalming',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f926-2642.png?v8',
      },
      {
        name: 'man_factory_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3ed.png?v8',
      },
      {
        name: 'man_farmer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f33e.png?v8',
      },
      {
        name: 'man_feeding_baby',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f37c.png?v8',
      },
      {
        name: 'man_firefighter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f692.png?v8',
      },
      {
        name: 'man_health_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-2695.png?v8',
      },
      {
        name: 'man_in_manual_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9bd.png?v8',
      },
      {
        name: 'man_in_motorized_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9bc.png?v8',
      },
      {
        name: 'man_in_tuxedo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f935-2642.png?v8',
      },
      {
        name: 'man_judge',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-2696.png?v8',
      },
      {
        name: 'man_juggling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f939-2642.png?v8',
      },
      {
        name: 'man_mechanic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f527.png?v8',
      },
      {
        name: 'man_office_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f4bc.png?v8',
      },
      {
        name: 'man_pilot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-2708.png?v8',
      },
      {
        name: 'man_playing_handball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93e-2642.png?v8',
      },
      {
        name: 'man_playing_water_polo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93d-2642.png?v8',
      },
      {
        name: 'man_scientist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f52c.png?v8',
      },
      {
        name: 'man_shrugging',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f937-2642.png?v8',
      },
      {
        name: 'man_singer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3a4.png?v8',
      },
      {
        name: 'man_student',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f393.png?v8',
      },
      {
        name: 'man_teacher',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f3eb.png?v8',
      },
      {
        name: 'man_technologist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f4bb.png?v8',
      },
      {
        name: 'man_with_gua_pi_mao',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f472.png?v8',
      },
      {
        name: 'man_with_probing_cane',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9af.png?v8',
      },
      {
        name: 'man_with_turban',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f473-2642.png?v8',
      },
      {
        name: 'man_with_veil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f470-2642.png?v8',
      },
      {
        name: 'mandarin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34a.png?v8',
      },
      {
        name: 'mango',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f96d.png?v8',
      },
      {
        name: 'mans_shoe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f45e.png?v8',
      },
      {
        name: 'mantelpiece_clock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f570.png?v8',
      },
      {
        name: 'manual_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9bd.png?v8',
      },
      {
        name: 'maple_leaf',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f341.png?v8',
      },
      {
        name: 'marshall_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ed.png?v8',
      },
      {
        name: 'martial_arts_uniform',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f94b.png?v8',
      },
      {
        name: 'martinique',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f6.png?v8',
      },
      {
        name: 'mask',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f637.png?v8',
      },
      {
        name: 'massage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f486.png?v8',
      },
      {
        name: 'massage_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f486-2642.png?v8',
      },
      {
        name: 'massage_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f486-2640.png?v8',
      },
      {
        name: 'mate',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c9.png?v8',
      },
      {
        name: 'mauritania',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f7.png?v8',
      },
      {
        name: 'mauritius',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fa.png?v8',
      },
      {
        name: 'mayotte',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fe-1f1f9.png?v8',
      },
      {
        name: 'meat_on_bone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f356.png?v8',
      },
      {
        name: 'mechanic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f527.png?v8',
      },
      {
        name: 'mechanical_arm',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9be.png?v8',
      },
      {
        name: 'mechanical_leg',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9bf.png?v8',
      },
      {
        name: 'medal_military',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f396.png?v8',
      },
      {
        name: 'medal_sports',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c5.png?v8',
      },
      {
        name: 'medical_symbol',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2695.png?v8',
      },
      {
        name: 'mega',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e3.png?v8',
      },
      {
        name: 'melon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f348.png?v8',
      },
      {
        name: 'memo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png?v8',
      },
      {
        name: 'men_wrestling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93c-2642.png?v8',
      },
      {
        name: 'mending_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2764-1fa79.png?v8',
      },
      {
        name: 'menorah',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f54e.png?v8',
      },
      {
        name: 'mens',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b9.png?v8',
      },
      {
        name: 'mermaid',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9dc-2640.png?v8',
      },
      {
        name: 'merman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9dc-2642.png?v8',
      },
      {
        name: 'merperson',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9dc.png?v8',
      },
      {
        name: 'metal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f918.png?v8',
      },
      {
        name: 'metro',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f687.png?v8',
      },
      {
        name: 'mexico',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1fd.png?v8',
      },
      {
        name: 'microbe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a0.png?v8',
      },
      {
        name: 'micronesia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f2.png?v8',
      },
      {
        name: 'microphone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a4.png?v8',
      },
      {
        name: 'microscope',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52c.png?v8',
      },
      {
        name: 'middle_finger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f595.png?v8',
      },
      {
        name: 'military_helmet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa96.png?v8',
      },
      {
        name: 'milk_glass',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f95b.png?v8',
      },
      {
        name: 'milky_way',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f30c.png?v8',
      },
      {
        name: 'minibus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f690.png?v8',
      },
      {
        name: 'minidisc',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4bd.png?v8',
      },
      {
        name: 'mirror',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa9e.png?v8',
      },
      {
        name: 'mobile_phone_off',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f4.png?v8',
      },
      {
        name: 'moldova',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1e9.png?v8',
      },
      {
        name: 'monaco',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1e8.png?v8',
      },
      {
        name: 'money_mouth_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f911.png?v8',
      },
      {
        name: 'money_with_wings',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b8.png?v8',
      },
      {
        name: 'moneybag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b0.png?v8',
      },
      {
        name: 'mongolia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f3.png?v8',
      },
      {
        name: 'monkey',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f412.png?v8',
      },
      {
        name: 'monkey_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f435.png?v8',
      },
      {
        name: 'monocle_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d0.png?v8',
      },
      {
        name: 'monorail',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f69d.png?v8',
      },
      {
        name: 'montenegro',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ea.png?v8',
      },
      {
        name: 'montserrat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f8.png?v8',
      },
      {
        name: 'moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f314.png?v8',
      },
      {
        name: 'moon_cake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f96e.png?v8',
      },
      {
        name: 'morocco',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1e6.png?v8',
      },
      {
        name: 'mortar_board',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f393.png?v8',
      },
      {
        name: 'mosque',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f54c.png?v8',
      },
      {
        name: 'mosquito',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f99f.png?v8',
      },
      {
        name: 'motor_boat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6e5.png?v8',
      },
      {
        name: 'motor_scooter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f5.png?v8',
      },
      {
        name: 'motorcycle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cd.png?v8',
      },
      {
        name: 'motorized_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9bc.png?v8',
      },
      {
        name: 'motorway',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6e3.png?v8',
      },
      {
        name: 'mount_fuji',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5fb.png?v8',
      },
      {
        name: 'mountain',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f0.png?v8',
      },
      {
        name: 'mountain_bicyclist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b5.png?v8',
      },
      {
        name: 'mountain_biking_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b5-2642.png?v8',
      },
      {
        name: 'mountain_biking_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b5-2640.png?v8',
      },
      {
        name: 'mountain_cableway',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a0.png?v8',
      },
      {
        name: 'mountain_railway',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f69e.png?v8',
      },
      {
        name: 'mountain_snow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d4.png?v8',
      },
      {
        name: 'mouse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f42d.png?v8',
      },
      {
        name: 'mouse2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f401.png?v8',
      },
      {
        name: 'mouse_trap',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa4.png?v8',
      },
      {
        name: 'movie_camera',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a5.png?v8',
      },
      {
        name: 'moyai',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5ff.png?v8',
      },
      {
        name: 'mozambique',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ff.png?v8',
      },
      {
        name: 'mrs_claus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f936.png?v8',
      },
      {
        name: 'muscle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4aa.png?v8',
      },
      {
        name: 'mushroom',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f344.png?v8',
      },
      {
        name: 'musical_keyboard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b9.png?v8',
      },
      {
        name: 'musical_note',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b5.png?v8',
      },
      {
        name: 'musical_score',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3bc.png?v8',
      },
      {
        name: 'mute',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f507.png?v8',
      },
      {
        name: 'mx_claus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f384.png?v8',
      },
      {
        name: 'myanmar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f2.png?v8',
      },
      {
        name: 'nail_care',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f485.png?v8',
      },
      {
        name: 'name_badge',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4db.png?v8',
      },
      {
        name: 'namibia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1e6.png?v8',
      },
      {
        name: 'national_park',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3de.png?v8',
      },
      {
        name: 'nauru',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f7.png?v8',
      },
      {
        name: 'nauseated_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f922.png?v8',
      },
      {
        name: 'nazar_amulet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ff.png?v8',
      },
      {
        name: 'neckbeard',
        link: 'https://github.githubassets.com/images/icons/emoji/neckbeard.png?v8',
      },
      {
        name: 'necktie',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f454.png?v8',
      },
      {
        name: 'negative_squared_cross_mark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/274e.png?v8',
      },
      {
        name: 'nepal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f5.png?v8',
      },
      {
        name: 'nerd_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f913.png?v8',
      },
      {
        name: 'nesting_dolls',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa86.png?v8',
      },
      {
        name: 'netherlands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f1.png?v8',
      },
      {
        name: 'neutral_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f610.png?v8',
      },
      {
        name: 'new',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f195.png?v8',
      },
      {
        name: 'new_caledonia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1e8.png?v8',
      },
      {
        name: 'new_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f311.png?v8',
      },
      {
        name: 'new_moon_with_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f31a.png?v8',
      },
      {
        name: 'new_zealand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ff.png?v8',
      },
      {
        name: 'newspaper',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f0.png?v8',
      },
      {
        name: 'newspaper_roll',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5de.png?v8',
      },
      {
        name: 'next_track_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23ed.png?v8',
      },
      {
        name: 'ng',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f196.png?v8',
      },
      {
        name: 'ng_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f645-2642.png?v8',
      },
      {
        name: 'ng_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f645-2640.png?v8',
      },
      {
        name: 'nicaragua',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ee.png?v8',
      },
      {
        name: 'niger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ea.png?v8',
      },
      {
        name: 'nigeria',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1ec.png?v8',
      },
      {
        name: 'night_with_stars',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f303.png?v8',
      },
      {
        name: 'nine',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0039-20e3.png?v8',
      },
      {
        name: 'ninja',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f977.png?v8',
      },
      {
        name: 'niue',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1fa.png?v8',
      },
      {
        name: 'no_bell',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f515.png?v8',
      },
      {
        name: 'no_bicycles',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b3.png?v8',
      },
      {
        name: 'no_entry',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26d4.png?v8',
      },
      {
        name: 'no_entry_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6ab.png?v8',
      },
      {
        name: 'no_good',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f645.png?v8',
      },
      {
        name: 'no_good_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f645-2642.png?v8',
      },
      {
        name: 'no_good_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f645-2640.png?v8',
      },
      {
        name: 'no_mobile_phones',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f5.png?v8',
      },
      {
        name: 'no_mouth',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f636.png?v8',
      },
      {
        name: 'no_pedestrians',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b7.png?v8',
      },
      {
        name: 'no_smoking',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6ad.png?v8',
      },
      {
        name: 'non-potable_water',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b1.png?v8',
      },
      {
        name: 'norfolk_island',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1eb.png?v8',
      },
      {
        name: 'north_korea',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f5.png?v8',
      },
      {
        name: 'northern_mariana_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f5.png?v8',
      },
      {
        name: 'norway',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f3-1f1f4.png?v8',
      },
      {
        name: 'nose',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f443.png?v8',
      },
      {
        name: 'notebook',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d3.png?v8',
      },
      {
        name: 'notebook_with_decorative_cover',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d4.png?v8',
      },
      {
        name: 'notes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b6.png?v8',
      },
      {
        name: 'nut_and_bolt',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f529.png?v8',
      },
      {
        name: 'o',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2b55.png?v8',
      },
      {
        name: 'o2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f17e.png?v8',
      },
      {
        name: 'ocean',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f30a.png?v8',
      },
      {
        name: 'octocat',
        link: 'https://github.githubassets.com/images/icons/emoji/octocat.png?v8',
      },
      {
        name: 'octopus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f419.png?v8',
      },
      {
        name: 'oden',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f362.png?v8',
      },
      {
        name: 'office',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e2.png?v8',
      },
      {
        name: 'office_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f4bc.png?v8',
      },
      {
        name: 'oil_drum',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6e2.png?v8',
      },
      {
        name: 'ok',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f197.png?v8',
      },
      {
        name: 'ok_hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44c.png?v8',
      },
      {
        name: 'ok_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f646-2642.png?v8',
      },
      {
        name: 'ok_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f646.png?v8',
      },
      {
        name: 'ok_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f646-2640.png?v8',
      },
      {
        name: 'old_key',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5dd.png?v8',
      },
      {
        name: 'older_adult',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d3.png?v8',
      },
      {
        name: 'older_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f474.png?v8',
      },
      {
        name: 'older_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f475.png?v8',
      },
      {
        name: 'olive',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fad2.png?v8',
      },
      {
        name: 'om',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f549.png?v8',
      },
      {
        name: 'oman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f4-1f1f2.png?v8',
      },
      {
        name: 'on',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f51b.png?v8',
      },
      {
        name: 'oncoming_automobile',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f698.png?v8',
      },
      {
        name: 'oncoming_bus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f68d.png?v8',
      },
      {
        name: 'oncoming_police_car',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f694.png?v8',
      },
      {
        name: 'oncoming_taxi',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f696.png?v8',
      },
      {
        name: 'one',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0031-20e3.png?v8',
      },
      {
        name: 'one_piece_swimsuit',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa71.png?v8',
      },
      {
        name: 'onion',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c5.png?v8',
      },
      {
        name: 'open_book',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png?v8',
      },
      {
        name: 'open_file_folder',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c2.png?v8',
      },
      {
        name: 'open_hands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f450.png?v8',
      },
      {
        name: 'open_mouth',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f62e.png?v8',
      },
      {
        name: 'open_umbrella',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2602.png?v8',
      },
      {
        name: 'ophiuchus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26ce.png?v8',
      },
      {
        name: 'orange',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34a.png?v8',
      },
      {
        name: 'orange_book',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d9.png?v8',
      },
      {
        name: 'orange_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e0.png?v8',
      },
      {
        name: 'orange_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e1.png?v8',
      },
      {
        name: 'orange_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e7.png?v8',
      },
      {
        name: 'orangutan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a7.png?v8',
      },
      {
        name: 'orthodox_cross',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2626.png?v8',
      },
      {
        name: 'otter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a6.png?v8',
      },
      {
        name: 'outbox_tray',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e4.png?v8',
      },
      {
        name: 'owl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f989.png?v8',
      },
      {
        name: 'ox',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f402.png?v8',
      },
      {
        name: 'oyster',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9aa.png?v8',
      },
      {
        name: 'package',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e6.png?v8',
      },
      {
        name: 'page_facing_up',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c4.png?v8',
      },
      {
        name: 'page_with_curl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4c3.png?v8',
      },
      {
        name: 'pager',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4df.png?v8',
      },
      {
        name: 'paintbrush',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f58c.png?v8',
      },
      {
        name: 'pakistan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f0.png?v8',
      },
      {
        name: 'palau',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1fc.png?v8',
      },
      {
        name: 'palestinian_territories',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f8.png?v8',
      },
      {
        name: 'palm_tree',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f334.png?v8',
      },
      {
        name: 'palms_up_together',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f932.png?v8',
      },
      {
        name: 'panama',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1e6.png?v8',
      },
      {
        name: 'pancakes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f95e.png?v8',
      },
      {
        name: 'panda_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43c.png?v8',
      },
      {
        name: 'paperclip',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ce.png?v8',
      },
      {
        name: 'paperclips',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f587.png?v8',
      },
      {
        name: 'papua_new_guinea',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1ec.png?v8',
      },
      {
        name: 'parachute',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa82.png?v8',
      },
      {
        name: 'paraguay',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1fe.png?v8',
      },
      {
        name: 'parasol_on_ground',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f1.png?v8',
      },
      {
        name: 'parking',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f17f.png?v8',
      },
      {
        name: 'parrot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f99c.png?v8',
      },
      {
        name: 'part_alternation_mark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/303d.png?v8',
      },
      {
        name: 'partly_sunny',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26c5.png?v8',
      },
      {
        name: 'partying_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f973.png?v8',
      },
      {
        name: 'passenger_ship',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f3.png?v8',
      },
      {
        name: 'passport_control',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6c2.png?v8',
      },
      {
        name: 'pause_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23f8.png?v8',
      },
      {
        name: 'paw_prints',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43e.png?v8',
      },
      {
        name: 'peace_symbol',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/262e.png?v8',
      },
      {
        name: 'peach',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f351.png?v8',
      },
      {
        name: 'peacock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f99a.png?v8',
      },
      {
        name: 'peanuts',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f95c.png?v8',
      },
      {
        name: 'pear',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f350.png?v8',
      },
      {
        name: 'pen',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f58a.png?v8',
      },
      {
        name: 'pencil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png?v8',
      },
      {
        name: 'pencil2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/270f.png?v8',
      },
      {
        name: 'penguin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f427.png?v8',
      },
      {
        name: 'pensive',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f614.png?v8',
      },
      {
        name: 'people_holding_hands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f91d-1f9d1.png?v8',
      },
      {
        name: 'people_hugging',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fac2.png?v8',
      },
      {
        name: 'performing_arts',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ad.png?v8',
      },
      {
        name: 'persevere',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f623.png?v8',
      },
      {
        name: 'person_bald',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b2.png?v8',
      },
      {
        name: 'person_curly_hair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b1.png?v8',
      },
      {
        name: 'person_feeding_baby',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f37c.png?v8',
      },
      {
        name: 'person_fencing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93a.png?v8',
      },
      {
        name: 'person_in_manual_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9bd.png?v8',
      },
      {
        name: 'person_in_motorized_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9bc.png?v8',
      },
      {
        name: 'person_in_tuxedo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f935.png?v8',
      },
      {
        name: 'person_red_hair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b0.png?v8',
      },
      {
        name: 'person_white_hair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9b3.png?v8',
      },
      {
        name: 'person_with_probing_cane',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f9af.png?v8',
      },
      {
        name: 'person_with_turban',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f473.png?v8',
      },
      {
        name: 'person_with_veil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f470.png?v8',
      },
      {
        name: 'peru',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1ea.png?v8',
      },
      {
        name: 'petri_dish',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9eb.png?v8',
      },
      {
        name: 'philippines',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1ed.png?v8',
      },
      {
        name: 'phone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/260e.png?v8',
      },
      {
        name: 'pick',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26cf.png?v8',
      },
      {
        name: 'pickup_truck',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6fb.png?v8',
      },
      {
        name: 'pie',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f967.png?v8',
      },
      {
        name: 'pig',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f437.png?v8',
      },
      {
        name: 'pig2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f416.png?v8',
      },
      {
        name: 'pig_nose',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43d.png?v8',
      },
      {
        name: 'pill',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f48a.png?v8',
      },
      {
        name: 'pilot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-2708.png?v8',
      },
      {
        name: 'pinata',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa85.png?v8',
      },
      {
        name: 'pinched_fingers',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f90c.png?v8',
      },
      {
        name: 'pinching_hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f90f.png?v8',
      },
      {
        name: 'pineapple',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34d.png?v8',
      },
      {
        name: 'ping_pong',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d3.png?v8',
      },
      {
        name: 'pirate_flag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-2620.png?v8',
      },
      {
        name: 'pisces',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2653.png?v8',
      },
      {
        name: 'pitcairn_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f3.png?v8',
      },
      {
        name: 'pizza',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f355.png?v8',
      },
      {
        name: 'placard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa7.png?v8',
      },
      {
        name: 'place_of_worship',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6d0.png?v8',
      },
      {
        name: 'plate_with_cutlery',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f37d.png?v8',
      },
      {
        name: 'play_or_pause_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23ef.png?v8',
      },
      {
        name: 'pleading_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f97a.png?v8',
      },
      {
        name: 'plunger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa0.png?v8',
      },
      {
        name: 'point_down',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f447.png?v8',
      },
      {
        name: 'point_left',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f448.png?v8',
      },
      {
        name: 'point_right',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f449.png?v8',
      },
      {
        name: 'point_up',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/261d.png?v8',
      },
      {
        name: 'point_up_2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f446.png?v8',
      },
      {
        name: 'poland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f1.png?v8',
      },
      {
        name: 'polar_bear',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43b-2744.png?v8',
      },
      {
        name: 'police_car',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f693.png?v8',
      },
      {
        name: 'police_officer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46e.png?v8',
      },
      {
        name: 'policeman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46e-2642.png?v8',
      },
      {
        name: 'policewoman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46e-2640.png?v8',
      },
      {
        name: 'poodle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f429.png?v8',
      },
      {
        name: 'poop',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png?v8',
      },
      {
        name: 'popcorn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f37f.png?v8',
      },
      {
        name: 'portugal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f9.png?v8',
      },
      {
        name: 'post_office',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3e3.png?v8',
      },
      {
        name: 'postal_horn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ef.png?v8',
      },
      {
        name: 'postbox',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ee.png?v8',
      },
      {
        name: 'potable_water',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b0.png?v8',
      },
      {
        name: 'potato',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f954.png?v8',
      },
      {
        name: 'potted_plant',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fab4.png?v8',
      },
      {
        name: 'pouch',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f45d.png?v8',
      },
      {
        name: 'poultry_leg',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f357.png?v8',
      },
      {
        name: 'pound',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b7.png?v8',
      },
      {
        name: 'pout',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f621.png?v8',
      },
      {
        name: 'pouting_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f63e.png?v8',
      },
      {
        name: 'pouting_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64e.png?v8',
      },
      {
        name: 'pouting_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64e-2642.png?v8',
      },
      {
        name: 'pouting_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64e-2640.png?v8',
      },
      {
        name: 'pray',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png?v8',
      },
      {
        name: 'prayer_beads',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ff.png?v8',
      },
      {
        name: 'pregnant_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f930.png?v8',
      },
      {
        name: 'pretzel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f968.png?v8',
      },
      {
        name: 'previous_track_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23ee.png?v8',
      },
      {
        name: 'prince',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f934.png?v8',
      },
      {
        name: 'princess',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f478.png?v8',
      },
      {
        name: 'printer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5a8.png?v8',
      },
      {
        name: 'probing_cane',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9af.png?v8',
      },
      {
        name: 'puerto_rico',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f7.png?v8',
      },
      {
        name: 'punch',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44a.png?v8',
      },
      {
        name: 'purple_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e3.png?v8',
      },
      {
        name: 'purple_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f49c.png?v8',
      },
      {
        name: 'purple_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7ea.png?v8',
      },
      {
        name: 'purse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f45b.png?v8',
      },
      {
        name: 'pushpin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4cc.png?v8',
      },
      {
        name: 'put_litter_in_its_place',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6ae.png?v8',
      },
      {
        name: 'qatar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f6-1f1e6.png?v8',
      },
      {
        name: 'question',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2753.png?v8',
      },
      {
        name: 'rabbit',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f430.png?v8',
      },
      {
        name: 'rabbit2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f407.png?v8',
      },
      {
        name: 'raccoon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f99d.png?v8',
      },
      {
        name: 'racehorse',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f40e.png?v8',
      },
      {
        name: 'racing_car',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ce.png?v8',
      },
      {
        name: 'radio',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4fb.png?v8',
      },
      {
        name: 'radio_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f518.png?v8',
      },
      {
        name: 'radioactive',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2622.png?v8',
      },
      {
        name: 'rage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f621.png?v8',
      },
      {
        name: 'rage1',
        link: 'https://github.githubassets.com/images/icons/emoji/rage1.png?v8',
      },
      {
        name: 'rage2',
        link: 'https://github.githubassets.com/images/icons/emoji/rage2.png?v8',
      },
      {
        name: 'rage3',
        link: 'https://github.githubassets.com/images/icons/emoji/rage3.png?v8',
      },
      {
        name: 'rage4',
        link: 'https://github.githubassets.com/images/icons/emoji/rage4.png?v8',
      },
      {
        name: 'railway_car',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f683.png?v8',
      },
      {
        name: 'railway_track',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6e4.png?v8',
      },
      {
        name: 'rainbow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f308.png?v8',
      },
      {
        name: 'rainbow_flag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f3-1f308.png?v8',
      },
      {
        name: 'raised_back_of_hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f91a.png?v8',
      },
      {
        name: 'raised_eyebrow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f928.png?v8',
      },
      {
        name: 'raised_hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/270b.png?v8',
      },
      {
        name: 'raised_hand_with_fingers_splayed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f590.png?v8',
      },
      {
        name: 'raised_hands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png?v8',
      },
      {
        name: 'raising_hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64b.png?v8',
      },
      {
        name: 'raising_hand_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64b-2642.png?v8',
      },
      {
        name: 'raising_hand_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64b-2640.png?v8',
      },
      {
        name: 'ram',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f40f.png?v8',
      },
      {
        name: 'ramen',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f35c.png?v8',
      },
      {
        name: 'rat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f400.png?v8',
      },
      {
        name: 'razor',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa92.png?v8',
      },
      {
        name: 'receipt',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9fe.png?v8',
      },
      {
        name: 'record_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23fa.png?v8',
      },
      {
        name: 'recycle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/267b.png?v8',
      },
      {
        name: 'red_car',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f697.png?v8',
      },
      {
        name: 'red_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f534.png?v8',
      },
      {
        name: 'red_envelope',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e7.png?v8',
      },
      {
        name: 'red_haired_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b0.png?v8',
      },
      {
        name: 'red_haired_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b0.png?v8',
      },
      {
        name: 'red_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e5.png?v8',
      },
      {
        name: 'registered',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/00ae.png?v8',
      },
      {
        name: 'relaxed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/263a.png?v8',
      },
      {
        name: 'relieved',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f60c.png?v8',
      },
      {
        name: 'reminder_ribbon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f397.png?v8',
      },
      {
        name: 'repeat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f501.png?v8',
      },
      {
        name: 'repeat_one',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f502.png?v8',
      },
      {
        name: 'rescue_worker_helmet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26d1.png?v8',
      },
      {
        name: 'restroom',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6bb.png?v8',
      },
      {
        name: 'reunion',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1ea.png?v8',
      },
      {
        name: 'revolving_hearts',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f49e.png?v8',
      },
      {
        name: 'rewind',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23ea.png?v8',
      },
      {
        name: 'rhinoceros',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f98f.png?v8',
      },
      {
        name: 'ribbon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f380.png?v8',
      },
      {
        name: 'rice',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f35a.png?v8',
      },
      {
        name: 'rice_ball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f359.png?v8',
      },
      {
        name: 'rice_cracker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f358.png?v8',
      },
      {
        name: 'rice_scene',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f391.png?v8',
      },
      {
        name: 'right_anger_bubble',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5ef.png?v8',
      },
      {
        name: 'ring',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f48d.png?v8',
      },
      {
        name: 'ringed_planet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa90.png?v8',
      },
      {
        name: 'robot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f916.png?v8',
      },
      {
        name: 'rock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa8.png?v8',
      },
      {
        name: 'rocket',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f680.png?v8',
      },
      {
        name: 'rofl',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f923.png?v8',
      },
      {
        name: 'roll_eyes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f644.png?v8',
      },
      {
        name: 'roll_of_paper',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9fb.png?v8',
      },
      {
        name: 'roller_coaster',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a2.png?v8',
      },
      {
        name: 'roller_skate',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6fc.png?v8',
      },
      {
        name: 'romania',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1f4.png?v8',
      },
      {
        name: 'rooster',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f413.png?v8',
      },
      {
        name: 'rose',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f339.png?v8',
      },
      {
        name: 'rosette',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f5.png?v8',
      },
      {
        name: 'rotating_light',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a8.png?v8',
      },
      {
        name: 'round_pushpin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4cd.png?v8',
      },
      {
        name: 'rowboat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a3.png?v8',
      },
      {
        name: 'rowing_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a3-2642.png?v8',
      },
      {
        name: 'rowing_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a3-2640.png?v8',
      },
      {
        name: 'ru',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1fa.png?v8',
      },
      {
        name: 'rugby_football',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c9.png?v8',
      },
      {
        name: 'runner',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c3.png?v8',
      },
      {
        name: 'running',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c3.png?v8',
      },
      {
        name: 'running_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c3-2642.png?v8',
      },
      {
        name: 'running_shirt_with_sash',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3bd.png?v8',
      },
      {
        name: 'running_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c3-2640.png?v8',
      },
      {
        name: 'rwanda',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1fc.png?v8',
      },
      {
        name: 'sa',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f202.png?v8',
      },
      {
        name: 'safety_pin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f7.png?v8',
      },
      {
        name: 'safety_vest',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ba.png?v8',
      },
      {
        name: 'sagittarius',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2650.png?v8',
      },
      {
        name: 'sailboat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f5.png?v8',
      },
      {
        name: 'sake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f376.png?v8',
      },
      {
        name: 'salt',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c2.png?v8',
      },
      {
        name: 'samoa',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fc-1f1f8.png?v8',
      },
      {
        name: 'san_marino',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f2.png?v8',
      },
      {
        name: 'sandal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f461.png?v8',
      },
      {
        name: 'sandwich',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f96a.png?v8',
      },
      {
        name: 'santa',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f385.png?v8',
      },
      {
        name: 'sao_tome_principe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f9.png?v8',
      },
      {
        name: 'sari',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f97b.png?v8',
      },
      {
        name: 'sassy_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f481-2642.png?v8',
      },
      {
        name: 'sassy_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f481-2640.png?v8',
      },
      {
        name: 'satellite',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4e1.png?v8',
      },
      {
        name: 'satisfied',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f606.png?v8',
      },
      {
        name: 'saudi_arabia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e6.png?v8',
      },
      {
        name: 'sauna_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d6-2642.png?v8',
      },
      {
        name: 'sauna_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d6.png?v8',
      },
      {
        name: 'sauna_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d6-2640.png?v8',
      },
      {
        name: 'sauropod',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f995.png?v8',
      },
      {
        name: 'saxophone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b7.png?v8',
      },
      {
        name: 'scarf',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e3.png?v8',
      },
      {
        name: 'school',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3eb.png?v8',
      },
      {
        name: 'school_satchel',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f392.png?v8',
      },
      {
        name: 'scientist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f52c.png?v8',
      },
      {
        name: 'scissors',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2702.png?v8',
      },
      {
        name: 'scorpion',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f982.png?v8',
      },
      {
        name: 'scorpius',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/264f.png?v8',
      },
      {
        name: 'scotland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png?v8',
      },
      {
        name: 'scream',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f631.png?v8',
      },
      {
        name: 'scream_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f640.png?v8',
      },
      {
        name: 'screwdriver',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa9b.png?v8',
      },
      {
        name: 'scroll',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4dc.png?v8',
      },
      {
        name: 'seal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ad.png?v8',
      },
      {
        name: 'seat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ba.png?v8',
      },
      {
        name: 'secret',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/3299.png?v8',
      },
      {
        name: 'see_no_evil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f648.png?v8',
      },
      {
        name: 'seedling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f331.png?v8',
      },
      {
        name: 'selfie',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f933.png?v8',
      },
      {
        name: 'senegal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f3.png?v8',
      },
      {
        name: 'serbia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f7-1f1f8.png?v8',
      },
      {
        name: 'service_dog',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f415-1f9ba.png?v8',
      },
      {
        name: 'seven',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0037-20e3.png?v8',
      },
      {
        name: 'sewing_needle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa1.png?v8',
      },
      {
        name: 'seychelles',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e8.png?v8',
      },
      {
        name: 'shallow_pan_of_food',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f958.png?v8',
      },
      {
        name: 'shamrock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2618.png?v8',
      },
      {
        name: 'shark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f988.png?v8',
      },
      {
        name: 'shaved_ice',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f367.png?v8',
      },
      {
        name: 'sheep',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f411.png?v8',
      },
      {
        name: 'shell',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f41a.png?v8',
      },
      {
        name: 'shield',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6e1.png?v8',
      },
      {
        name: 'shinto_shrine',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26e9.png?v8',
      },
      {
        name: 'ship',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a2.png?v8',
      },
      {
        name: 'shipit',
        link: 'https://github.githubassets.com/images/icons/emoji/shipit.png?v8',
      },
      {
        name: 'shirt',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f455.png?v8',
      },
      {
        name: 'shit',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png?v8',
      },
      {
        name: 'shoe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f45e.png?v8',
      },
      {
        name: 'shopping',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6cd.png?v8',
      },
      {
        name: 'shopping_cart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6d2.png?v8',
      },
      {
        name: 'shorts',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa73.png?v8',
      },
      {
        name: 'shower',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6bf.png?v8',
      },
      {
        name: 'shrimp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f990.png?v8',
      },
      {
        name: 'shrug',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f937.png?v8',
      },
      {
        name: 'shushing_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f92b.png?v8',
      },
      {
        name: 'sierra_leone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f1.png?v8',
      },
      {
        name: 'signal_strength',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f6.png?v8',
      },
      {
        name: 'singapore',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ec.png?v8',
      },
      {
        name: 'singer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3a4.png?v8',
      },
      {
        name: 'sint_maarten',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1fd.png?v8',
      },
      {
        name: 'six',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0036-20e3.png?v8',
      },
      {
        name: 'six_pointed_star',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52f.png?v8',
      },
      {
        name: 'skateboard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f9.png?v8',
      },
      {
        name: 'ski',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3bf.png?v8',
      },
      {
        name: 'skier',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26f7.png?v8',
      },
      {
        name: 'skull',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f480.png?v8',
      },
      {
        name: 'skull_and_crossbones',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2620.png?v8',
      },
      {
        name: 'skunk',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a8.png?v8',
      },
      {
        name: 'sled',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6f7.png?v8',
      },
      {
        name: 'sleeping',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f634.png?v8',
      },
      {
        name: 'sleeping_bed',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6cc.png?v8',
      },
      {
        name: 'sleepy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f62a.png?v8',
      },
      {
        name: 'slightly_frowning_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f641.png?v8',
      },
      {
        name: 'slightly_smiling_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f642.png?v8',
      },
      {
        name: 'slot_machine',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3b0.png?v8',
      },
      {
        name: 'sloth',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a5.png?v8',
      },
      {
        name: 'slovakia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f0.png?v8',
      },
      {
        name: 'slovenia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ee.png?v8',
      },
      {
        name: 'small_airplane',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6e9.png?v8',
      },
      {
        name: 'small_blue_diamond',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f539.png?v8',
      },
      {
        name: 'small_orange_diamond',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f538.png?v8',
      },
      {
        name: 'small_red_triangle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f53a.png?v8',
      },
      {
        name: 'small_red_triangle_down',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f53b.png?v8',
      },
      {
        name: 'smile',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f604.png?v8',
      },
      {
        name: 'smile_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f638.png?v8',
      },
      {
        name: 'smiley',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f603.png?v8',
      },
      {
        name: 'smiley_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f63a.png?v8',
      },
      {
        name: 'smiling_face_with_tear',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f972.png?v8',
      },
      {
        name: 'smiling_face_with_three_hearts',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f970.png?v8',
      },
      {
        name: 'smiling_imp',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f608.png?v8',
      },
      {
        name: 'smirk',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f60f.png?v8',
      },
      {
        name: 'smirk_cat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f63c.png?v8',
      },
      {
        name: 'smoking',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6ac.png?v8',
      },
      {
        name: 'snail',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f40c.png?v8',
      },
      {
        name: 'snake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f40d.png?v8',
      },
      {
        name: 'sneezing_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f927.png?v8',
      },
      {
        name: 'snowboarder',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c2.png?v8',
      },
      {
        name: 'snowflake',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2744.png?v8',
      },
      {
        name: 'snowman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26c4.png?v8',
      },
      {
        name: 'snowman_with_snow',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2603.png?v8',
      },
      {
        name: 'soap',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9fc.png?v8',
      },
      {
        name: 'sob',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f62d.png?v8',
      },
      {
        name: 'soccer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26bd.png?v8',
      },
      {
        name: 'socks',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9e6.png?v8',
      },
      {
        name: 'softball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f94e.png?v8',
      },
      {
        name: 'solomon_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e7.png?v8',
      },
      {
        name: 'somalia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f4.png?v8',
      },
      {
        name: 'soon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f51c.png?v8',
      },
      {
        name: 'sos',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f198.png?v8',
      },
      {
        name: 'sound',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f509.png?v8',
      },
      {
        name: 'south_africa',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ff-1f1e6.png?v8',
      },
      {
        name: 'south_georgia_south_sandwich_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1f8.png?v8',
      },
      {
        name: 'south_sudan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f8.png?v8',
      },
      {
        name: 'space_invader',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f47e.png?v8',
      },
      {
        name: 'spades',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2660.png?v8',
      },
      {
        name: 'spaghetti',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f35d.png?v8',
      },
      {
        name: 'sparkle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2747.png?v8',
      },
      {
        name: 'sparkler',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f387.png?v8',
      },
      {
        name: 'sparkles',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2728.png?v8',
      },
      {
        name: 'sparkling_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f496.png?v8',
      },
      {
        name: 'speak_no_evil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f64a.png?v8',
      },
      {
        name: 'speaker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f508.png?v8',
      },
      {
        name: 'speaking_head',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5e3.png?v8',
      },
      {
        name: 'speech_balloon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ac.png?v8',
      },
      {
        name: 'speedboat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a4.png?v8',
      },
      {
        name: 'spider',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f577.png?v8',
      },
      {
        name: 'spider_web',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f578.png?v8',
      },
      {
        name: 'spiral_calendar',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5d3.png?v8',
      },
      {
        name: 'spiral_notepad',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5d2.png?v8',
      },
      {
        name: 'sponge',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9fd.png?v8',
      },
      {
        name: 'spoon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f944.png?v8',
      },
      {
        name: 'squid',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f991.png?v8',
      },
      {
        name: 'sri_lanka',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1f0.png?v8',
      },
      {
        name: 'st_barthelemy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f1.png?v8',
      },
      {
        name: 'st_helena',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ed.png?v8',
      },
      {
        name: 'st_kitts_nevis',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f0-1f1f3.png?v8',
      },
      {
        name: 'st_lucia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f1-1f1e8.png?v8',
      },
      {
        name: 'st_martin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1eb.png?v8',
      },
      {
        name: 'st_pierre_miquelon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f2.png?v8',
      },
      {
        name: 'st_vincent_grenadines',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1e8.png?v8',
      },
      {
        name: 'stadium',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3df.png?v8',
      },
      {
        name: 'standing_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9cd-2642.png?v8',
      },
      {
        name: 'standing_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9cd.png?v8',
      },
      {
        name: 'standing_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9cd-2640.png?v8',
      },
      {
        name: 'star',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2b50.png?v8',
      },
      {
        name: 'star2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f31f.png?v8',
      },
      {
        name: 'star_and_crescent',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/262a.png?v8',
      },
      {
        name: 'star_of_david',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2721.png?v8',
      },
      {
        name: 'star_struck',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f929.png?v8',
      },
      {
        name: 'stars',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f320.png?v8',
      },
      {
        name: 'station',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f689.png?v8',
      },
      {
        name: 'statue_of_liberty',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5fd.png?v8',
      },
      {
        name: 'steam_locomotive',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f682.png?v8',
      },
      {
        name: 'stethoscope',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa7a.png?v8',
      },
      {
        name: 'stew',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f372.png?v8',
      },
      {
        name: 'stop_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23f9.png?v8',
      },
      {
        name: 'stop_sign',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6d1.png?v8',
      },
      {
        name: 'stopwatch',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23f1.png?v8',
      },
      {
        name: 'straight_ruler',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4cf.png?v8',
      },
      {
        name: 'strawberry',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f353.png?v8',
      },
      {
        name: 'stuck_out_tongue',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f61b.png?v8',
      },
      {
        name: 'stuck_out_tongue_closed_eyes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f61d.png?v8',
      },
      {
        name: 'stuck_out_tongue_winking_eye',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f61c.png?v8',
      },
      {
        name: 'student',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f393.png?v8',
      },
      {
        name: 'studio_microphone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f399.png?v8',
      },
      {
        name: 'stuffed_flatbread',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f959.png?v8',
      },
      {
        name: 'sudan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1e9.png?v8',
      },
      {
        name: 'sun_behind_large_cloud',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f325.png?v8',
      },
      {
        name: 'sun_behind_rain_cloud',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f326.png?v8',
      },
      {
        name: 'sun_behind_small_cloud',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f324.png?v8',
      },
      {
        name: 'sun_with_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f31e.png?v8',
      },
      {
        name: 'sunflower',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f33b.png?v8',
      },
      {
        name: 'sunglasses',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f60e.png?v8',
      },
      {
        name: 'sunny',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2600.png?v8',
      },
      {
        name: 'sunrise',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f305.png?v8',
      },
      {
        name: 'sunrise_over_mountains',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f304.png?v8',
      },
      {
        name: 'superhero',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b8.png?v8',
      },
      {
        name: 'superhero_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b8-2642.png?v8',
      },
      {
        name: 'superhero_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b8-2640.png?v8',
      },
      {
        name: 'supervillain',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b9.png?v8',
      },
      {
        name: 'supervillain_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b9-2642.png?v8',
      },
      {
        name: 'supervillain_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b9-2640.png?v8',
      },
      {
        name: 'surfer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c4.png?v8',
      },
      {
        name: 'surfing_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c4-2642.png?v8',
      },
      {
        name: 'surfing_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c4-2640.png?v8',
      },
      {
        name: 'suriname',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1f7.png?v8',
      },
      {
        name: 'sushi',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f363.png?v8',
      },
      {
        name: 'suspect',
        link: 'https://github.githubassets.com/images/icons/emoji/suspect.png?v8',
      },
      {
        name: 'suspension_railway',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f69f.png?v8',
      },
      {
        name: 'svalbard_jan_mayen',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ef.png?v8',
      },
      {
        name: 'swan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9a2.png?v8',
      },
      {
        name: 'swaziland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ff.png?v8',
      },
      {
        name: 'sweat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f613.png?v8',
      },
      {
        name: 'sweat_drops',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a6.png?v8',
      },
      {
        name: 'sweat_smile',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f605.png?v8',
      },
      {
        name: 'sweden',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ea.png?v8',
      },
      {
        name: 'sweet_potato',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f360.png?v8',
      },
      {
        name: 'swim_brief',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa72.png?v8',
      },
      {
        name: 'swimmer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ca.png?v8',
      },
      {
        name: 'swimming_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ca-2642.png?v8',
      },
      {
        name: 'swimming_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ca-2640.png?v8',
      },
      {
        name: 'switzerland',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1ed.png?v8',
      },
      {
        name: 'symbols',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f523.png?v8',
      },
      {
        name: 'synagogue',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f54d.png?v8',
      },
      {
        name: 'syria',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1fe.png?v8',
      },
      {
        name: 'syringe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f489.png?v8',
      },
      {
        name: 't-rex',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f996.png?v8',
      },
      {
        name: 'taco',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f32e.png?v8',
      },
      {
        name: 'tada',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f389.png?v8',
      },
      {
        name: 'taiwan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1fc.png?v8',
      },
      {
        name: 'tajikistan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ef.png?v8',
      },
      {
        name: 'takeout_box',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f961.png?v8',
      },
      {
        name: 'tamale',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fad4.png?v8',
      },
      {
        name: 'tanabata_tree',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f38b.png?v8',
      },
      {
        name: 'tangerine',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f34a.png?v8',
      },
      {
        name: 'tanzania',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ff.png?v8',
      },
      {
        name: 'taurus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2649.png?v8',
      },
      {
        name: 'taxi',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f695.png?v8',
      },
      {
        name: 'tea',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f375.png?v8',
      },
      {
        name: 'teacher',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3eb.png?v8',
      },
      {
        name: 'teapot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fad6.png?v8',
      },
      {
        name: 'technologist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f4bb.png?v8',
      },
      {
        name: 'teddy_bear',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f8.png?v8',
      },
      {
        name: 'telephone',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/260e.png?v8',
      },
      {
        name: 'telephone_receiver',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4de.png?v8',
      },
      {
        name: 'telescope',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52d.png?v8',
      },
      {
        name: 'tennis',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3be.png?v8',
      },
      {
        name: 'tent',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26fa.png?v8',
      },
      {
        name: 'test_tube',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9ea.png?v8',
      },
      {
        name: 'thailand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ed.png?v8',
      },
      {
        name: 'thermometer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f321.png?v8',
      },
      {
        name: 'thinking',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f914.png?v8',
      },
      {
        name: 'thong_sandal',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa74.png?v8',
      },
      {
        name: 'thought_balloon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ad.png?v8',
      },
      {
        name: 'thread',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f5.png?v8',
      },
      {
        name: 'three',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0033-20e3.png?v8',
      },
      {
        name: 'thumbsdown',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png?v8',
      },
      {
        name: 'thumbsup',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8',
      },
      {
        name: 'ticket',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ab.png?v8',
      },
      {
        name: 'tickets',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f39f.png?v8',
      },
      {
        name: 'tiger',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f42f.png?v8',
      },
      {
        name: 'tiger2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f405.png?v8',
      },
      {
        name: 'timer_clock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/23f2.png?v8',
      },
      {
        name: 'timor_leste',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f1.png?v8',
      },
      {
        name: 'tipping_hand_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f481-2642.png?v8',
      },
      {
        name: 'tipping_hand_person',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f481.png?v8',
      },
      {
        name: 'tipping_hand_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f481-2640.png?v8',
      },
      {
        name: 'tired_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f62b.png?v8',
      },
      {
        name: 'tm',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2122.png?v8',
      },
      {
        name: 'togo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1ec.png?v8',
      },
      {
        name: 'toilet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6bd.png?v8',
      },
      {
        name: 'tokelau',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f0.png?v8',
      },
      {
        name: 'tokyo_tower',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5fc.png?v8',
      },
      {
        name: 'tomato',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f345.png?v8',
      },
      {
        name: 'tonga',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f4.png?v8',
      },
      {
        name: 'tongue',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f445.png?v8',
      },
      {
        name: 'toolbox',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f0.png?v8',
      },
      {
        name: 'tooth',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9b7.png?v8',
      },
      {
        name: 'toothbrush',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1faa5.png?v8',
      },
      {
        name: 'top',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f51d.png?v8',
      },
      {
        name: 'tophat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a9.png?v8',
      },
      {
        name: 'tornado',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f32a.png?v8',
      },
      {
        name: 'tr',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f7.png?v8',
      },
      {
        name: 'trackball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5b2.png?v8',
      },
      {
        name: 'tractor',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f69c.png?v8',
      },
      {
        name: 'traffic_light',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a5.png?v8',
      },
      {
        name: 'train',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f68b.png?v8',
      },
      {
        name: 'train2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f686.png?v8',
      },
      {
        name: 'tram',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f68a.png?v8',
      },
      {
        name: 'transgender_flag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f3-26a7.png?v8',
      },
      {
        name: 'transgender_symbol',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26a7.png?v8',
      },
      {
        name: 'triangular_flag_on_post',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a9.png?v8',
      },
      {
        name: 'triangular_ruler',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4d0.png?v8',
      },
      {
        name: 'trident',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f531.png?v8',
      },
      {
        name: 'trinidad_tobago',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f9.png?v8',
      },
      {
        name: 'tristan_da_cunha',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1e6.png?v8',
      },
      {
        name: 'triumph',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f624.png?v8',
      },
      {
        name: 'trolleybus',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f68e.png?v8',
      },
      {
        name: 'trollface',
        link: 'https://github.githubassets.com/images/icons/emoji/trollface.png?v8',
      },
      {
        name: 'trophy',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png?v8',
      },
      {
        name: 'tropical_drink',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f379.png?v8',
      },
      {
        name: 'tropical_fish',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f420.png?v8',
      },
      {
        name: 'truck',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f69a.png?v8',
      },
      {
        name: 'trumpet',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ba.png?v8',
      },
      {
        name: 'tshirt',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f455.png?v8',
      },
      {
        name: 'tulip',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f337.png?v8',
      },
      {
        name: 'tumbler_glass',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f943.png?v8',
      },
      {
        name: 'tunisia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f3.png?v8',
      },
      {
        name: 'turkey',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f983.png?v8',
      },
      {
        name: 'turkmenistan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f2.png?v8',
      },
      {
        name: 'turks_caicos_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1e8.png?v8',
      },
      {
        name: 'turtle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f422.png?v8',
      },
      {
        name: 'tuvalu',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1fb.png?v8',
      },
      {
        name: 'tv',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4fa.png?v8',
      },
      {
        name: 'twisted_rightwards_arrows',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f500.png?v8',
      },
      {
        name: 'two',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0032-20e3.png?v8',
      },
      {
        name: 'two_hearts',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f495.png?v8',
      },
      {
        name: 'two_men_holding_hands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46c.png?v8',
      },
      {
        name: 'two_women_holding_hands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f46d.png?v8',
      },
      {
        name: 'u5272',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f239.png?v8',
      },
      {
        name: 'u5408',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f234.png?v8',
      },
      {
        name: 'u55b6',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f23a.png?v8',
      },
      {
        name: 'u6307',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f22f.png?v8',
      },
      {
        name: 'u6708',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f237.png?v8',
      },
      {
        name: 'u6709',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f236.png?v8',
      },
      {
        name: 'u6e80',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f235.png?v8',
      },
      {
        name: 'u7121',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f21a.png?v8',
      },
      {
        name: 'u7533',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f238.png?v8',
      },
      {
        name: 'u7981',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f232.png?v8',
      },
      {
        name: 'u7a7a',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f233.png?v8',
      },
      {
        name: 'uganda',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1ec.png?v8',
      },
      {
        name: 'uk',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e7.png?v8',
      },
      {
        name: 'ukraine',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1e6.png?v8',
      },
      {
        name: 'umbrella',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2614.png?v8',
      },
      {
        name: 'unamused',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f612.png?v8',
      },
      {
        name: 'underage',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f51e.png?v8',
      },
      {
        name: 'unicorn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f984.png?v8',
      },
      {
        name: 'united_arab_emirates',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ea.png?v8',
      },
      {
        name: 'united_nations',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1f3.png?v8',
      },
      {
        name: 'unlock',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f513.png?v8',
      },
      {
        name: 'up',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f199.png?v8',
      },
      {
        name: 'upside_down_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f643.png?v8',
      },
      {
        name: 'uruguay',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1fe.png?v8',
      },
      {
        name: 'us',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1f8.png?v8',
      },
      {
        name: 'us_outlying_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1f2.png?v8',
      },
      {
        name: 'us_virgin_islands',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1ee.png?v8',
      },
      {
        name: 'uzbekistan',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1ff.png?v8',
      },
      {
        name: 'v',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/270c.png?v8',
      },
      {
        name: 'vampire',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9db.png?v8',
      },
      {
        name: 'vampire_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9db-2642.png?v8',
      },
      {
        name: 'vampire_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9db-2640.png?v8',
      },
      {
        name: 'vanuatu',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1fa.png?v8',
      },
      {
        name: 'vatican_city',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1e6.png?v8',
      },
      {
        name: 'venezuela',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1ea.png?v8',
      },
      {
        name: 'vertical_traffic_light',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6a6.png?v8',
      },
      {
        name: 'vhs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4fc.png?v8',
      },
      {
        name: 'vibration_mode',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f3.png?v8',
      },
      {
        name: 'video_camera',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4f9.png?v8',
      },
      {
        name: 'video_game',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3ae.png?v8',
      },
      {
        name: 'vietnam',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fb-1f1f3.png?v8',
      },
      {
        name: 'violin',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3bb.png?v8',
      },
      {
        name: 'virgo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/264d.png?v8',
      },
      {
        name: 'volcano',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f30b.png?v8',
      },
      {
        name: 'volleyball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3d0.png?v8',
      },
      {
        name: 'vomiting_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f92e.png?v8',
      },
      {
        name: 'vs',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f19a.png?v8',
      },
      {
        name: 'vulcan_salute',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f596.png?v8',
      },
      {
        name: 'waffle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9c7.png?v8',
      },
      {
        name: 'wales',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.png?v8',
      },
      {
        name: 'walking',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b6.png?v8',
      },
      {
        name: 'walking_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b6-2642.png?v8',
      },
      {
        name: 'walking_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6b6-2640.png?v8',
      },
      {
        name: 'wallis_futuna',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fc-1f1eb.png?v8',
      },
      {
        name: 'waning_crescent_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f318.png?v8',
      },
      {
        name: 'waning_gibbous_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f316.png?v8',
      },
      {
        name: 'warning',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26a0.png?v8',
      },
      {
        name: 'wastebasket',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5d1.png?v8',
      },
      {
        name: 'watch',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/231a.png?v8',
      },
      {
        name: 'water_buffalo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f403.png?v8',
      },
      {
        name: 'water_polo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93d.png?v8',
      },
      {
        name: 'watermelon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f349.png?v8',
      },
      {
        name: 'wave',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png?v8',
      },
      {
        name: 'wavy_dash',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/3030.png?v8',
      },
      {
        name: 'waxing_crescent_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f312.png?v8',
      },
      {
        name: 'waxing_gibbous_moon',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f314.png?v8',
      },
      {
        name: 'wc',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6be.png?v8',
      },
      {
        name: 'weary',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f629.png?v8',
      },
      {
        name: 'wedding',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f492.png?v8',
      },
      {
        name: 'weight_lifting',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cb.png?v8',
      },
      {
        name: 'weight_lifting_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cb-2642.png?v8',
      },
      {
        name: 'weight_lifting_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3cb-2640.png?v8',
      },
      {
        name: 'western_sahara',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1ed.png?v8',
      },
      {
        name: 'whale',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f433.png?v8',
      },
      {
        name: 'whale2',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f40b.png?v8',
      },
      {
        name: 'wheel_of_dharma',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2638.png?v8',
      },
      {
        name: 'wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/267f.png?v8',
      },
      {
        name: 'white_check_mark',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2705.png?v8',
      },
      {
        name: 'white_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26aa.png?v8',
      },
      {
        name: 'white_flag',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3f3.png?v8',
      },
      {
        name: 'white_flower',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4ae.png?v8',
      },
      {
        name: 'white_haired_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b3.png?v8',
      },
      {
        name: 'white_haired_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b3.png?v8',
      },
      {
        name: 'white_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f90d.png?v8',
      },
      {
        name: 'white_large_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/2b1c.png?v8',
      },
      {
        name: 'white_medium_small_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25fd.png?v8',
      },
      {
        name: 'white_medium_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25fb.png?v8',
      },
      {
        name: 'white_small_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/25ab.png?v8',
      },
      {
        name: 'white_square_button',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f533.png?v8',
      },
      {
        name: 'wilted_flower',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f940.png?v8',
      },
      {
        name: 'wind_chime',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f390.png?v8',
      },
      {
        name: 'wind_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f32c.png?v8',
      },
      {
        name: 'window',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa9f.png?v8',
      },
      {
        name: 'wine_glass',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f377.png?v8',
      },
      {
        name: 'wink',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f609.png?v8',
      },
      {
        name: 'wolf',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f43a.png?v8',
      },
      {
        name: 'woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469.png?v8',
      },
      {
        name: 'woman_artist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3a8.png?v8',
      },
      {
        name: 'woman_astronaut',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f680.png?v8',
      },
      {
        name: 'woman_beard',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d4-2640.png?v8',
      },
      {
        name: 'woman_cartwheeling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f938-2640.png?v8',
      },
      {
        name: 'woman_cook',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f373.png?v8',
      },
      {
        name: 'woman_dancing',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f483.png?v8',
      },
      {
        name: 'woman_facepalming',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f926-2640.png?v8',
      },
      {
        name: 'woman_factory_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3ed.png?v8',
      },
      {
        name: 'woman_farmer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f33e.png?v8',
      },
      {
        name: 'woman_feeding_baby',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f37c.png?v8',
      },
      {
        name: 'woman_firefighter',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f692.png?v8',
      },
      {
        name: 'woman_health_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-2695.png?v8',
      },
      {
        name: 'woman_in_manual_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9bd.png?v8',
      },
      {
        name: 'woman_in_motorized_wheelchair',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9bc.png?v8',
      },
      {
        name: 'woman_in_tuxedo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f935-2640.png?v8',
      },
      {
        name: 'woman_judge',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-2696.png?v8',
      },
      {
        name: 'woman_juggling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f939-2640.png?v8',
      },
      {
        name: 'woman_mechanic',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f527.png?v8',
      },
      {
        name: 'woman_office_worker',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f4bc.png?v8',
      },
      {
        name: 'woman_pilot',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-2708.png?v8',
      },
      {
        name: 'woman_playing_handball',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93e-2640.png?v8',
      },
      {
        name: 'woman_playing_water_polo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93d-2640.png?v8',
      },
      {
        name: 'woman_scientist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f52c.png?v8',
      },
      {
        name: 'woman_shrugging',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f937-2640.png?v8',
      },
      {
        name: 'woman_singer',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3a4.png?v8',
      },
      {
        name: 'woman_student',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f393.png?v8',
      },
      {
        name: 'woman_teacher',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f3eb.png?v8',
      },
      {
        name: 'woman_technologist',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f4bb.png?v8',
      },
      {
        name: 'woman_with_headscarf',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9d5.png?v8',
      },
      {
        name: 'woman_with_probing_cane',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9af.png?v8',
      },
      {
        name: 'woman_with_turban',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f473-2640.png?v8',
      },
      {
        name: 'woman_with_veil',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f470-2640.png?v8',
      },
      {
        name: 'womans_clothes',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f45a.png?v8',
      },
      {
        name: 'womans_hat',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f452.png?v8',
      },
      {
        name: 'women_wrestling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93c-2640.png?v8',
      },
      {
        name: 'womens',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f6ba.png?v8',
      },
      {
        name: 'wood',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fab5.png?v8',
      },
      {
        name: 'woozy_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f974.png?v8',
      },
      {
        name: 'world_map',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f5fa.png?v8',
      },
      {
        name: 'worm',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fab1.png?v8',
      },
      {
        name: 'worried',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f61f.png?v8',
      },
      {
        name: 'wrench',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f527.png?v8',
      },
      {
        name: 'wrestling',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f93c.png?v8',
      },
      {
        name: 'writing_hand',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/270d.png?v8',
      },
      {
        name: 'x',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/274c.png?v8',
      },
      {
        name: 'yarn',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f6.png?v8',
      },
      {
        name: 'yawning_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f971.png?v8',
      },
      {
        name: 'yellow_circle',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e1.png?v8',
      },
      {
        name: 'yellow_heart',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f49b.png?v8',
      },
      {
        name: 'yellow_square',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f7e8.png?v8',
      },
      {
        name: 'yemen',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1fe-1f1ea.png?v8',
      },
      {
        name: 'yen',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4b4.png?v8',
      },
      {
        name: 'yin_yang',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/262f.png?v8',
      },
      {
        name: 'yo_yo',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa80.png?v8',
      },
      {
        name: 'yum',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f60b.png?v8',
      },
      {
        name: 'zambia',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ff-1f1f2.png?v8',
      },
      {
        name: 'zany_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f92a.png?v8',
      },
      {
        name: 'zap',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/26a1.png?v8',
      },
      {
        name: 'zebra',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f993.png?v8',
      },
      {
        name: 'zero',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/0030-20e3.png?v8',
      },
      {
        name: 'zimbabwe',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f1ff-1f1fc.png?v8',
      },
      {
        name: 'zipper_mouth_face',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f910.png?v8',
      },
      {
        name: 'zombie',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9df.png?v8',
      },
      {
        name: 'zombie_man',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9df-2642.png?v8',
      },
      {
        name: 'zombie_woman',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9df-2640.png?v8',
      },
      {
        name: 'zzz',
        link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f4a4.png?v8',
      },
    ];
    return { emojis };
  }
}
