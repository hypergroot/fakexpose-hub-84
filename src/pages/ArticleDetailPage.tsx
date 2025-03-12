
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // This would normally fetch article data from an API based on the slug
  // For now we'll use a mock article based on the slug
  
  // Mock article data - in a real app, this would come from an API
  const articleData = {
    title: "Detailed view of article: " + slug,
    description: "This is a detailed view of the article you selected. In a real application, this content would be fetched from a database or API based on the article slug.",
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl nec ultricies. Sed euismod, nisl nec ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl nec ultricies.</p>
    <p>Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <p>Praesent nonummy mi in odio. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
    <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
    <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>`,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Fact Check",
    date: "April 12, 2024",
    author: "FakeXpose Team",
    readTime: "5 min read"
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 pt-24">
          <div className="container">
            <FadeIn>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-6 items-center gap-2" 
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1 rounded-full bg-fakexpose-blue/10 px-3 py-1 text-xs font-medium text-fakexpose-blue">
                    <Tag className="h-3 w-3" />
                    {articleData.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {articleData.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {articleData.readTime}
                  </span>
                </div>
                
                <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                  {articleData.title}
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  {articleData.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Featured Image */}
        <section className="pb-12">
          <div className="container">
            <FadeIn>
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={articleData.image}
                  alt={articleData.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="pb-20">
          <div className="container">
            <FadeIn>
              <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: articleData.content }} />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
