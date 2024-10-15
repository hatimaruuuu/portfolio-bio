import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Yamada UIスタイルシステム</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">ボタン</h2>
          <div className="flex flex-wrap gap-4">
            <Button>デフォルト</Button>
            <Button variant="destructive">デストラクティブ</Button>
            <Button variant="outline">アウトライン</Button>
            <Button variant="secondary">セカンダリ</Button>
            <Button variant="ghost">ゴースト</Button>
            <Button variant="link">リンク</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">入力フィールド</h2>
          <div className="max-w-sm">
            <Input placeholder="テキストを入力してください" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">カード</h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>カードタイトル</CardTitle>
              <CardDescription>これはカードの説明です。</CardDescription>
            </CardHeader>
            <CardContent>
              <p>ここにカードのメインコンテンツが入ります。</p>
            </CardContent>
            <CardFooter>
              <Button>アクション</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}