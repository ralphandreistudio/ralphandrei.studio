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
  photos: { src: string; alt: string }[]
  sections: StorySection[]
  credit?: string
}

export const stories: Story[] = [
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
