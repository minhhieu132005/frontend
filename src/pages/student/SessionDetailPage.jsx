import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const SessionDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-8">
      <Link to="/my-schedule" className="flex items-center text-gray-500 hover:text-blue-600 mb-6 font-medium">
        <ArrowLeft size={20} className="mr-2" /> Return
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            [cite_start]<h1 className="text-2xl font-bold text-gray-900 mb-2">Data Structures & Algorithms [cite: 2330]</h1>
            <div className="text-gray-500">
              [cite_start]<span>2:00 PM - 4:00 PM [cite: 2330][cite_start]</span> <span className="mx-2">•</span> <span>15 Oct 2025 [cite: 2330]</span>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Completed</span>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          
          <section>
            [cite_start]<h3 className="font-bold text-gray-900 mb-2">Tutor [cite: 2330]</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold">NA</div>
              <span className="font-medium">Nguyễn Văn A</span>
            </div>
          </section>

          <section>
            [cite_start]<h3 className="font-bold text-gray-900 mb-2">Session Content [cite: 2330]</h3>
            <p className="text-gray-600 leading-relaxed">
              Reviewing Binary Search Trees and AVL Trees styling. Discussed complexity analysis.
            </p>
          </section>

          <section>
            [cite_start]<h3 className="font-bold text-gray-900 mb-2">Document [cite: 2330]</h3>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 w-fit">
              <FileText className="text-red-500" />
              <div>
                <div className="text-sm font-medium">BST_Lecture_Notes.pdf</div>
                <div className="text-xs text-gray-400">2.4 MB</div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
               [cite_start]<h3 className="font-bold text-gray-900">Feedback [cite: 2330]</h3>
               [cite_start]<button className="text-sm text-red-500 font-semibold hover:underline">Recall [cite: 2331]</button>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex text-yellow-400 text-sm mb-2">★★★★★</div>
                <p className="text-gray-600 text-sm">"Great session, helped me understand balancing trees."</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
export default SessionDetailPage;