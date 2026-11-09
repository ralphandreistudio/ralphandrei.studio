export interface StorySection {
  heading?: string
  paragraphs: string[]
}

export interface Story {
  slug: string
  title: string
  date: string
  dateIso: string
  excerpt: string
  cover: string
  coverAlt?: string
  photos: { src: string; alt: string }[]
  sections: StorySection[]
  credit?: string
}

export const stories: Story[] = [
  {
    slug: 'devday-exchange-manila-2026',
    title: 'OpenAI DevDay Exchange Manila Gathers Local Builders at AWS BGC',
    date: 'November 6, 2026',
    dateIso: '2026-11-06',
    excerpt:
      'Developers, tech enthusiasts, and founders gathered at the AWS Office in BGC for an evening of DevDay announcements, Codex workflows, project demos, and hands-on building.',
    cover: '/stories/devday-exchange-manila-2026/poster.jpg',
    coverAlt:
      'Attendees pose for a group photo at DevDay Exchange Community: Manila.',
    photos: [
      {
        src: '/stories/devday-exchange-manila-2026/1.jpg',
        alt: 'Attendees listen to a DevDay presentation at the AWS Office in Bonifacio Global City.',
      },
      {
        src: '/stories/devday-exchange-manila-2026/2.jpg',
        alt: 'A speaker presents the DevDay Exchange Community event recap.',
      },
      {
        src: '/stories/devday-exchange-manila-2026/3.jpg',
        alt: 'A DevDay Exchange discussion prompt asks attendees which feature has been a game changer for them.',
      },
      {
        src: '/stories/devday-exchange-manila-2026/4.jpg',
        alt: 'DevDay Exchange Manila attendees pose beside an OpenAI banner.',
      },
      {
        src: '/stories/devday-exchange-manila-2026/5.jpg',
        alt: 'Guests share a meal and continue networking at DevDay Exchange Manila.',
      },
      {
        src: '/stories/devday-exchange-manila-2026/6.jpg',
        alt: 'Attendees fill the AWS Office event room while a DevDay Exchange presentation is underway.',
      },
    ],
    sections: [
      {
        paragraphs: [
          'On November 6, 2026, the AWS Office at Arthaland Century Pacific Tower in Bonifacio Global City hosted DevDay Exchange Community: Manila. Developers, tech enthusiasts, and founders spent the evening unpacking the latest OpenAI DevDay announcements, comparing notes on Codex workflows, and building together.',
          'The event ran from 5:00 PM to 10:00 PM and was organized by David Marquez, CTO at Yield and the local OpenAI Codex Ambassador for Manila, in partnership with the OpenAI Codex Community.',
        ],
      },
      {
        heading: 'The Program',
        paragraphs: [
          'The evening moved through four parts: a walkthrough of the global DevDay announcements, a look at new Codex workflows and AI tools, project show-and-tells from local builders, and a mini-hackathon and build session. It gave the room time to take in what was new, then put it to work.',
        ],
      },
      {
        heading: 'The Night',
        paragraphs: [
          'Guests arrived at the AWS office in BGC from the early evening. The first part of the program focused on what came out of the global DevDay and what it means for developers building from Manila. From there, the room moved from listening to showing: builders demoed their own projects, and the mini-hackathon created space to work with the new tools hands-on.',
          'Networking ran through the whole night, from conversations between sessions to shared tables and impromptu product discussions. The exchange carried on well beyond the formal program, with students, startup founders, and engineers comparing ideas, workflows, and the next things they wanted to make.',
        ],
      },
      {
        heading: 'Behind the Exchange',
        paragraphs: [
          'DevDay Exchange is a community format. Rather than waiting on recaps, local groups gather to go through the announcements together and try them out in the room. In Manila, the format fit a scene already full of student developers, startup founders, and independent engineers who build and ship on their own.',
          'That was the spirit of the night: a local room for a global conversation, made useful by the people willing to turn ideas into working projects together.',
        ],
      },
    ],
    credit:
      'Studio Ralph Andrei covered DevDay Exchange Community: Manila at the AWS Office, Bonifacio Global City.',
  },
  {
    slug: 'summer-jam-showcase-philippine-qualifier-vol-3',
    title: 'Nocturnal Dance Company Wins SJSC Philippine Qualifier Vol. 3',
    date: 'October 24, 2026',
    dateIso: '2026-10-24',
    excerpt:
      'Twenty-four crews took the stage at the UP Theater for the Summer Jam Showcase Competition Philippine Qualifier Vol. 3, presented by BAWZ. Nocturnal Dance Company claimed the championship, with Autonomicass Crew and Foot Forward as runners-up.',
    cover: '/stories/summer-jam-showcase-philippine-qualifier-vol-3/poster.jpg',
    photos: [
      { src: '/stories/summer-jam-showcase-philippine-qualifier-vol-3/1.jpg', alt: 'Summer Jam Showcase Competition Philippine Qualifier Vol. 3 on the UP Theater stage screen' },
      { src: '/stories/summer-jam-showcase-philippine-qualifier-vol-3/2.jpg', alt: 'A crew performs a dramatic scene with a chair onstage' },
      { src: '/stories/summer-jam-showcase-philippine-qualifier-vol-3/3.jpg', alt: 'Dancers perform a theatrical lift in white and red costumes' },
      { src: '/stories/summer-jam-showcase-philippine-qualifier-vol-3/4.jpg', alt: 'A dance crew performs around a wooden bed prop' },
      { src: '/stories/summer-jam-showcase-philippine-qualifier-vol-3/5.jpg', alt: 'A dramatic dance performance under blue stage lights' },
      { src: '/stories/summer-jam-showcase-philippine-qualifier-vol-3/6.jpg', alt: 'A dance crew performs beneath blue spotlights' },
    ],
    sections: [
      {
        paragraphs: [
          'On October 24, 2026, the UP Theater hosted the Summer Jam Showcase Competition Philippine Qualifier Vol. 3, presented by BAWZ. Twenty-four crews took the stage in a night-long competition, and Nocturnal Dance Company walked away with the championship. Autonomicass Crew placed first runner-up, and Foot Forward placed second runner-up.',
        ],
      },
      {
        heading: 'The Lineup',
        paragraphs: [
          'Twenty-four teams were on the program, performing in this order: Mendez Dance Company, Femme MNL, Foot Forward, Komplex, CLA, Psycho, Chronophile, League of Monsters, Thy Kingdom, D’Chimpz, Nocturnal Dance Company, Legit Status, Oxycrew, Priderise, And Friends, Bon Appetit, Unistarz, Beyond the Box, Incognito, Street Crew 04, Ex-Mob, Nomads, Euphrosyne, and Autonomicass Crew.',
          'Teams registered and blocked onstage in three batches of eight through the morning and early afternoon. Each crew got a 10-minute blocking slot, and the competition itself ran on 5-minute sets.',
        ],
      },
      {
        heading: 'The Night',
        paragraphs: [
          'The house opened at 5:30 PM, followed by a final round of reminders, a sponsor loop, and a countdown. The program began at 6:30 PM with the national anthem and an opening prayer, then the hosts’ opening remarks and the introduction of the judging criteria. Mendez Dance Company opened the competition, and the crews performed back to back.',
          'Halfway through, a 20-minute break gave room for a sponsor segment and a raffle, along with promotions for BAWZ merch, workshops, and the concessionaires on site. The second half picked up with Oxycrew and ran through to Autonomicass Crew.',
        ],
      },
      {
        heading: 'After the Competition',
        paragraphs: [
          'With the competition done, the show turned to performances from Ashvinder Singh, Afrodite, Nica Santos, Nick Joseph, and Adrian Vendiola. BAWZ followed with an exhibition. The hosts also promoted what comes next for the community, including the SJSC Vol. 3 workshops, Summer Jam Dance Camp, BAWZ Intensives, and DanceXhibit. The weekend continued at BAWZ Complex on October 25.',
          'Closing remarks came from Coach Ae and XT, and the night ended with the awarding ceremony.',
        ],
      },
      {
        heading: 'Behind the Show',
        paragraphs: [
          'A production like this starts long before the doors open. Ingress for lights, sound, the LED wall, the generator set, the tech booth, and the judges’ table began at midnight, and production staff and manpower were called in at 6:00 AM. The day also included a tech run for music, AVPs, lights, and host spiels, plus a company call and production photo before the house opened. Egress ran into the night after the show.',
        ],
      },
      {
        heading: 'About the Qualifier',
        paragraphs: [
          'The Summer Jam Showcase Competition Philippine Qualifier is hosted by BAWZ, the Quezon City dance collective founded in 2019 and led by Aennon Tabungar. It connects the Philippine scene to the Summer Jam Showcase Competition in Da Nang, Vietnam, run by Recognize Studios. BAWZ itself won that title in March 2024, and in 2026 Power Impact Dancers brought the championship to the Philippines. Vol. 3 continues the qualifier’s job of giving Filipino crews a stage at home and a route abroad.',
        ],
      },
    ],
    credit:
      'Studio Ralph Andrei covered SJSC Philippine Qualifier Vol. 3 at the UP Theater, Quezon City.',
  },
  {
    slug: 'bawz-stage-vol-4',
    title: 'BAWZ STAGE VOL. 4: Dancing for a Seat on the World Stage',
    date: 'July 25, 2026',
    dateIso: '2026-07-25',
    excerpt:
      "On the evening of July 25, 2026, the SM North EDSA Skydome filled with dancers, families, and supporters for BAWZ STAGE VOL. 4, the fourth staging of BAWZ's annual fundraising concert.",
    cover: '/stories/bawz-stage-vol-4/poster.jpg',
    photos: [
      { src: '/stories/bawz-stage-vol-4/1.jpg', alt: 'BAWZ STAGE VOL. 4 — opening number' },
      { src: '/stories/bawz-stage-vol-4/2.jpg', alt: 'BAWZ STAGE VOL. 4 — guest crew performance' },
      { src: '/stories/bawz-stage-vol-4/3.jpg', alt: 'BAWZ STAGE VOL. 4 — group number' },
      { src: '/stories/bawz-stage-vol-4/4.jpg', alt: 'BAWZ STAGE VOL. 4 — solo performance' },
      { src: '/stories/bawz-stage-vol-4/5.jpg', alt: 'BAWZ STAGE VOL. 4 — BAWZ Complex showcase' },
      { src: '/stories/bawz-stage-vol-4/6.jpg', alt: 'BAWZ STAGE VOL. 4 — full cast' },
    ],
    sections: [
      {
        paragraphs: [
          "On the evening of July 25, 2026, the SM North EDSA Skydome filled with dancers, families, and supporters for BAWZ STAGE VOL. 4, the fourth staging of BAWZ's annual fundraising concert. Studio Ralph Andrei joined as Media Partner for the night, documenting a show that carried far more weight than a typical showcase.",
          "The concert arrives at a milestone moment for the Filipino dance collective. For the first time, BAWZ is set to represent the Philippines at the International Dance League's Community Division in Seoul, South Korea, competing alongside seven other teams from across Southeast Asia. Founded by the team behind STEEZY, IDL bills itself as the world's first professional dance league, structuring its competitions after professional sports leagues rather than the one-off battle format most local dancers grew up with. STAGE VOL. 4 exists to help get BAWZ there.",
        ],
      },
      {
        heading: 'A Concert Built on Community',
        paragraphs: [
          "Founded in 2019, BAWZ has spent the years since building more than a competitive resume. It has built a community, one that extends well past its own roster. That was on full display at STAGE VOL. 4, where BAWZ shared the stage with some of the country's most established crews, among them TPM, And Friends, ILLKNGDM, 10TATIVE, XYZ, KKV, The Manoeuvres, and Team BRRRT. Members of Jam Republic SEA, the Pro Division team captained by BAWZ founder Aennon Tabungar, also joined for individual guest performances in support of the fundraiser.",
          "That structure, competing teams sharing one stage for a common cause, reflected the concert's core idea. This year's production centered less on individual wins and more on what it actually takes to pursue dance professionally in the Philippines: the sacrifices that happen off camera, the setbacks that don't make it into a highlight reel, and the resilience it takes to keep choosing this path anyway. As Tabungar put it, they wanted the concert to tell a story that many dancers would recognize.",
        ],
      },
      {
        heading: 'What the Funds Are For',
        paragraphs: [
          "STAGE VOL. 4 is a fundraiser first. Ticket proceeds go toward BAWZ's campaign for the International Dance League's Community Division in Seoul, as well as the team's second roster, which is expected to compete in another international competition later this year. That IDL Community Division run goes live on August 1, 2026, at 6:30 PM — the next chapter the concert was built to support. The night also made room for BAWZ Complex, the group's Quezon City-based studio, where students from the Summer Dance Camp Year II took the stage to perform pieces built under the guidance of BAWZ's own instructors, proof that the pipeline the team is building runs both toward the world stage and back into the local community.",
        ],
      },
      {
        heading: 'Representing More Than a Team',
        paragraphs: [
          "What made STAGE VOL. 4 more than a competition send-off was how clearly it tied BAWZ's international ambitions back to where the group started. A team that formed in 2019 is now preparing to compete on a global stage, and it chose to mark that step not with a closed rehearsal or a quiet departure, but with a full concert built around the community that helped get them there. Guest crews, students, and fellow competitors all shared one night, one stage, and one cause.",
          'For Studio Ralph Andrei, covering STAGE VOL. 4 meant documenting a team on the edge of something bigger than themselves, still choosing, on the night before that leap, to make the show about everyone who helped carry them to it.',
        ],
      },
    ],
    credit:
      'Studio Ralph Andrei served as Media Partner for BAWZ STAGE VOL. 4, held July 25, 2026 at the SM North EDSA Skydome, Quezon City.',
  },
  {
    slug: 'bakas-exude-dancers-concert',
    title: 'BAKAS: The Mark That Exude Dancers Leave Behind',
    date: 'June 28, 2026',
    dateIso: '2026-06-28',
    excerpt:
      'On the evening of June 28, 2026, the FEU Tech Gymnasium filled up fast for BAKAS — the first full-length concert ever staged by FEU Institute of Technology\'s Artist Connection Exude Dancers.',
    cover: '/stories/bakas-exude-dancers-concert/poster.jpg',
    photos: [
      { src: '/stories/bakas-exude-dancers-concert/1.jpg', alt: 'BAKAS concert — Exude Dancers performing' },
      { src: '/stories/bakas-exude-dancers-concert/2.jpg', alt: 'BAKAS concert — stage performance' },
      { src: '/stories/bakas-exude-dancers-concert/3.jpg', alt: 'BAKAS concert — group number' },
      { src: '/stories/bakas-exude-dancers-concert/4.jpg', alt: 'BAKAS concert — dancers under stage lights' },
      { src: '/stories/bakas-exude-dancers-concert/5.jpg', alt: 'BAKAS concert — solo performance' },
      { src: '/stories/bakas-exude-dancers-concert/6.jpg', alt: 'BAKAS concert — full cast' },
    ],
    sections: [
      {
        paragraphs: [
          "On the evening of June 28, 2026, the FEU Tech Gymnasium opened its gates an hour early and still filled up fast. Friends, fellow dancers, and especially family came in to claim their seats for BAKAS: The Exude Dancers' Concert, the first full-length concert ever staged by FEU Institute of Technology's Artist Connection Exude Dancers. Studio Ralph Andrei was there to document the night, brought on as part of the event's co-presenting team.",
          'The word bakas means a mark, a trace left behind. It is what remains after someone has passed through a place. For a dance organization built on movement, on something that exists only for the seconds it takes to perform and then disappears, choosing that word as a title says a lot about what the night was actually about.',
        ],
      },
      {
        heading: 'More Than a Showcase',
        paragraphs: [
          "BAKAS was framed around the idea of a magnum opus, the Latin term for an artist's greatest work. Not simply a highlight reel, but the embodiment of an artist's soul. For Exude, that soul has been built over years of competition, repetition, and reinvention. Every choreography becomes a canvas, a place where emotion takes a shape that words cannot quite reach. The concert's program leaned fully into that idea, opening with a production number from Exude themselves before handing the stage over to a lineup of guest performers, from fellow university dance groups to independent artists, each given a few minutes to share the spotlight before Exude returned for two full acts of their own.",
          'The competitive resume on display backed up the storytelling. Over the years, Exude has placed third in DS Kings and DS Queens 2023, won U-Belt Dance PH Season 12, taken second in DS Kings 2024, claimed the Open Division title at Chosen Ground 16 and the College Division titles at Chosen Ground 18 and 19, and most recently won the College Division at BodyWars 2025. These titles were presented onstage not as trophies for their own sake, but as evidence of a version of themselves the group never expected to become.',
        ],
      },
      {
        heading: "What the Trophies Don't Show",
        paragraphs: [
          "What made BAKAS resonate beyond the technical execution was its honesty about the parts of the journey that don't make it onto a competition scoreboard. The concert traced the group's arc from auditions, through the early stretch where some members were dismissed by outsiders as just another genggeng, a group dancing for attention rather than craft, to the points where personal struggles nearly pushed individual members to walk away entirely.",
          "None of that was treated as a footnote. It was the spine of the show. The performances carried what audiences have come to call lungkutan, the emotionally driven, open-style pieces Exude is known for, work that connects with people on a level beyond technique. Set against the group's signature high-energy hip-hop numbers, the contrast gave the night its shape: celebration on one side, vulnerability on the other, and in between, a group of dancers choosing, again and again, to stay.",
          "That choice to stay is what the concert kept circling back to. Despite the setbacks, despite the moments that almost ended someone's run with the group, the members who took the stage on June 28 were the ones who found something in Exude worth holding onto. A second home. A family built through shared rehearsals, shared losses, and shared wins.",
        ],
      },
      {
        heading: 'The Mark They Leave',
        paragraphs: [
          "Exude's coach, Julius Dulce, closed out the night with remarks that tied the entire concert back to its title. Bakas, he explained, is a mark, something that stays imprinted on a person even after they've moved on. People will come and go through an organization like this one, members will graduate, new dancers will audition in their place, but what each person leaves behind in the process becomes permanent. The skills passed down, the friendships formed in a gym at odd hours, the courage it took to perform something deeply personal in front of a full house, all of it becomes part of what the next generation inherits.",
          'It is a fitting way to understand what the BAKAS concert ultimately documented. Not a single night\'s performance, but the cumulative trace of years of work, the version of Exude that exists now because of every member who passed through before. The titles on the wall matter, but so does everything that happened in the gaps between them, the doubt, the near-exits, the decision to keep showing up anyway.',
          'For Studio Ralph Andrei, covering BAKAS meant capturing not just choreography under stage lights, but a community in the middle of telling its own story, on its own terms, in front of the people who matter most to them. That is its own kind of mark, and one worth holding onto.',
        ],
      },
    ],
    credit:
      "Studio Ralph Andrei served as part of the documentation and co-presenting team for BAKAS: The Exude Dancers' Concert, held June 28, 2026 at the FEU Tech Gymnasium.",
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
