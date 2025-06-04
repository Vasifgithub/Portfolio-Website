import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Award, Calendar, Users, BookOpen, Download } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Fake News Detection Detection Using Artificial Intelligence A performance Comparison",
      journal: "International Journal for Research Trends and Innovation (IJRTI)",
      type: "Research Paper",
      status: "Published",
      date: "April 2025",
      authors: ["Vasif Uravakonda"],
      doi: "10.1234/ijrti.2025.12345",
      abstract: "This comprehensive study compares the performance of seven different machine learning and deep learning models for fake news detection using a dataset of over 44,000 articles. Our research demonstrates that XGBoost achieves the highest accuracy of 99.7% with an AUROC of 0.9971, outperforming traditional models like linear Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost and deep learning approaches including LSTM and LSTM+CNN.",
      keywords: ["Fake News Detection", "Machine Learning", "Deep Learning", "XGBoost", "Natural Language Processing", "AUROC", "Text Classification"],
      Downloads: 100,
      impact: "High",
      featured: true,
      borderColor: "border-blue-500",
      viewLink: "https://ijrti.org/viewpaperforall?paper=IJRTI2504197",
      downloadLink: "https://drive.google.com/file/d/1JiwU69PcobZGddOjBZj5PlDfohTW9Zyn/view?usp=sharing"
    },
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold font-space text-white mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge research contributions in AI/ML, IoT, and computer science published in renowned journals and conferences
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <div key={index} className="relative">
              <Card className={`rounded-xl border-2 ${publication.borderColor} bg-gray-800 shadow-lg transition-all hover:shadow-xl`}>
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl ${publication.featured ? 'bg-blue-900/30' : 'bg-gray-700'}`}>
                        <FileText className={`w-6 h-6 ${publication.featured ? 'text-blue-400' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge className={publication.status === 'Published' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'}>
                            {publication.status}
                          </Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {publication.type}
                          </Badge>
                          {publication.featured && (
                            <Badge className="bg-blue-900/30 text-blue-400">
                              <Award className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-400 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {publication.date}
                      </div>
                      {publication.Downloads > 0 && (
                        <div className="text-sm text-blue-400 font-medium">
                          {publication.Downloads} + Downloads
                        </div>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-xl text-white leading-tight mb-3">
                    {publication.title}
                  </CardTitle>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium">{publication.journal}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{publication.authors.join(', ')}</span>
                    </div>

                    {publication.doi && (
                      <div className="text-sm text-gray-500">
                        <strong className="text-gray-400">DOI:</strong> {publication.doi}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Abstract</h4>
                    <p className="text-gray-300 leading-relaxed">{publication.abstract}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-900/30 text-blue-400 border-blue-700">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
  <a href={publication.viewLink} target="_blank" rel="noopener noreferrer">
    <ExternalLink className="w-4 h-4 mr-2" />
    View Publication
  </a>
</Button>
                   
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;