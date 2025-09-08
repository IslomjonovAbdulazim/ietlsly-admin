import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface IELTSSection {
  id: string
  title: string
  description: string
  content: string
}

const sections: IELTSSection[] = [
  {
    id: 'reading',
    title: 'Reading',
    description: 'Practice reading passages and answer questions',
    content: ''
  },
  {
    id: 'listening',
    title: 'Listening',
    description: 'Improve listening skills with audio exercises',
    content: ''
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Practice writing tasks and essays',
    content: ''
  },
  {
    id: 'speaking',
    title: 'Speaking',
    description: 'Enhance speaking abilities with practice sessions',
    content: ''
  }
]

export function IELTSSections() {
  const getFileName = (sectionId: string) => {
    const fileMap: Record<string, string> = {
      reading: 'readingDash.html',
      listening: 'listeningDash.html', 
      writing: 'writingDash.html',
      speaking: 'SpeakingDash.html'
    }
    return fileMap[sectionId] || `${sectionId}.html`
  }

  const loadSectionContent = (sectionId: string) => {
    const bekhaFile = `/bekha/${getFileName(sectionId)}`
    
    return (
      <div className="w-full h-screen">
        <iframe
          src={bekhaFile}
          className="w-full h-full border-0 rounded-lg"
          title={`${sectionId} section`}
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>IELTS Practice Sections</CardTitle>
              <CardDescription>
                Select a section to practice your IELTS skills
              </CardDescription>
            </div>
            <button 
              onClick={() => window.open('https://checkout.paycom.uz/bT02OGE0NDAzNjc1NmQ0NDMzOGI2OGE1NGQ7YWMub3JkZXJJZD02OGI2ZDE1MzExNDY1MDZjNGNjNGE3MzE7YT0xMjAwMDAwO2M9aHR0cHM6Ly96ZWhubHkuYWkvcHJlbWl1bQ==', '_blank')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg border border-cyan-500 transition-colors"
              title="Payme to'lov"
            >
              💳 Payme
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="reading" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {sections.map((section) => (
                <TabsTrigger key={section.id} value={section.id}>
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {loadSectionContent(section.id)}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}