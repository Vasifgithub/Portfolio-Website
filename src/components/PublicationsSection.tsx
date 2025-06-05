import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Award, Calendar, Users, BookOpen, Download } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Fake News Detection Using Artificial Intelligence: A Performance Comparison",
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
    <section id="publications" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 md:mb-6">
            <BookOpen className="w-5 h-5 md:w-8 md:h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-white mb-3 md:mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Publications</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge research contributions in AI/ML, IoT, and computer science published in renowned journals and conferences
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {publications.map((publication, index) => (
            <div key={index} className="relative">
              <Card className={`rounded-xl border-2 ${publication.borderColor} bg-gray-800 shadow-lg transition-all hover:shadow-xl`}>
                <CardHeader className="pb-4 md:pb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 md:p-3 rounded-xl ${publication.featured ? 'bg-blue-900/30' : 'bg-gray-700'}`}>
                        <FileText className={`w-5 h-5 md:w-6 md:h-6 ${publication.featured ? 'text-blue-400' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex flex-col space-y-1 md:space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
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
                    <div className="flex flex-col md:items-end gap-1">
                      {publication.date && (
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {publication.date}
                        </div>
                      )}
                      {publication.Downloads && (
                        <div className="flex items-center text-sm text-gray-400">
                          <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {publication.Downloads} + Downloads
                        </div>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-lg md:text-xl text-white leading-tight mb-2 md:mb-3">
                    {publication.title}
                  </CardTitle>

                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium text-sm md:text-base">{publication.journal}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-xs md:text-sm">{publication.authors.join(', ')}</span>
                    </div>

                    {publication.doi && (
                      <div className="text-xs md:text-sm text-gray-500">
                        <strong className="text-gray-400">DOI:</strong> {publication.doi}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-1 md:mb-2">Abstract</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{publication.abstract}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2 md:mb-3">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-900/30 text-blue-400 border-blue-700 text-xs md:text-sm">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-3 md:pt-4">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-base">
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
