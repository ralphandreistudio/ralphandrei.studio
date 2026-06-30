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
    slug: 'bakas-exude-dancers-concert',
    title: 'BAKAS: The Mark That Exude Dancers Leave Behind',
    date: 'june 28, 2026',
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
