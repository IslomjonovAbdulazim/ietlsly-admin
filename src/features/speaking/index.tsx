import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

export default function Speaking() {
  const handleNavigateToSpeaking = () => {
    window.open('https://behruz-flutter.github.io/ieltsaaa/behruz1.html', '_blank')
  }

  const handleTestPracticeSpeaking = () => {
    window.open('https://behruz-flutter.github.io/ieltsaaa/behruz.html', '_blank')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Speaking</h1>
        <p className="text-muted-foreground">
          IELTS Speaking practice and test sections
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Speaking Practice
              <ExternalLink className="h-4 w-4" />
            </CardTitle>
            <CardDescription>
              Access the main speaking practice section
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleNavigateToSpeaking}
              className="w-full"
            >
              Go to Speaking Practice
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Test Practice Speaking
              <ExternalLink className="h-4 w-4" />
            </CardTitle>
            <CardDescription>
              Take a full speaking practice test
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleTestPracticeSpeaking}
              variant="outline"
              className="w-full"
            >
              Start Test Practice
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}