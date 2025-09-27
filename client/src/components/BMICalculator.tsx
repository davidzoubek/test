import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

interface BMIResult {
  bmi: number;
  category: string;
  color: "default" | "secondary" | "destructive" | "outline";
}

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      console.log('Invalid input values');
      return;
    }

    // Convert height from cm to meters if needed
    const heightInMeters = heightNum > 3 ? heightNum / 100 : heightNum;
    const bmi = weightNum / (heightInMeters * heightInMeters);
    
    let category: string;
    let color: BMIResult["color"];
    
    if (bmi < 18.5) {
      category = "Podváha";
      color = "secondary";
    } else if (bmi < 25) {
      category = "Normální váha";
      color = "default";
    } else if (bmi < 30) {
      category = "Nadváha";
      color = "outline";
    } else {
      category = "Obezita";
      color = "destructive";
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      color
    });

    console.log(`BMI calculated: ${Math.round(bmi * 10) / 10}, Category: ${category}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calculator className="h-6 w-6 text-primary" />
          <CardTitle>BMI Kalkulačka</CardTitle>
        </div>
        <CardDescription>
          Zadejte svou váhu a výšku pro výpočet BMI
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="weight" data-testid="label-weight">
              Váha (kg)
            </Label>
            <Input
              id="weight"
              type="number"
              placeholder="např. 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              data-testid="input-weight"
              step="0.1"
              min="1"
              max="500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="height" data-testid="label-height">
              Výška (cm nebo m)
            </Label>
            <Input
              id="height"
              type="number"
              placeholder="např. 175 nebo 1.75"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              data-testid="input-height"
              step="0.01"
              min="0.5"
              max="300"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            data-testid="button-calculate-bmi"
            disabled={!weight || !height}
          >
            Vypočítat BMI
          </Button>
        </form>

        {result && (
          <div className="mt-6 p-4 border rounded-lg bg-muted/50" data-testid="bmi-result">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Váš BMI je:</p>
              <p className="text-3xl font-bold text-foreground" data-testid="bmi-value">
                {result.bmi}
              </p>
              <Badge variant={result.color} data-testid="bmi-category">
                {result.category}
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}