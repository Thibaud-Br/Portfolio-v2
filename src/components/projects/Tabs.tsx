import { TabsList, TabsTrigger } from "@/components/ui";
export const TabsComponent = () => {
  return (
    <TabsList className="text-lg font-redhat">
      <TabsTrigger value="pres">Images</TabsTrigger>
      <TabsTrigger value="features">Caractéristiques</TabsTrigger>
      <TabsTrigger value="about">A propos</TabsTrigger>
    </TabsList>
  );
};
