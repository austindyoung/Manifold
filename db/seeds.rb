Assignment.create!([

])
MembershipRequest.create!([

])


Organization.create!([
  #1
  {title: "Priceton University, Department of Computer Science"},
  #2
  {title: "Google, Inc."},
  #3
  {title: "Stanford University, Department of Computer Science"},
  #4
  {title: "University of British Columbia, Computer Science"},
  #5
  {title: "MIT, Electrical Engineering & Computer Science"},
  #6
  {title: "Microsoft Research"},
  #7
  {title: "IBM Thomas J. Watson Research Center"},
])


Project.create!([
  #1
  {title: "Latent Drichlet Allocation", description: "We describe latent Dirichlet allocation (LDA), a generative probabilistic model for collections of discrete data such as text corpora. LDA is a three-level hierarchical Bayesian model, in which each item of a collection is modeled as a finite mixture over an underlying set of topics. Each topic is, in turn, modeled as an infinite mixture over an underlying set of topic probabilities. In the context of text modeling, the topic probabilities provide an explicit representation of a document. We present efficient approximate inference techniques based on variational methods and an EM algorithm for empirical Bayes parameter estimation. ",
  organization_id: 1},
#2
  {title: "MapReduce: Simplified Data Processing on Large Clusters", description: "MapReduce is a programming model and an associated implementation for processing and generating large data sets. Users specify a _map_ function that processes a key/value pair to generate a set of intermediate key/value pairs, and a _reduce_ function that merges all intermediate values associated with the same intermediate key. Many real world tasks are expressible in this model, as shown in the paper. Programs written in this functional style are automatically parallelized and executed on a large cluster of commodity machines. The run-time system takes care of the details of partitioning the input data, scheduling the program's execution across a set of machines, handling machine failures, and managing the required inter-machine communication. This allows programmers without any experience with parallel and distributed systems to easily utilize the resources of a large distributed system.",
  organization_id: 2},
#3
  {title: "The Anatomy of a Large-Scale Hypertextual Web Search Engine", description: "we present Google, a prototype of a large-scale search engine which makes heavy use of the structure present in hypertext. Google is designed to crawl and index the Web efficiently and produce much more satisfying search results than existing systems. The prototype with a full text and hyperlink database of at least 24 million pages is available at http://google.stanford.edu/ To engineer a search engine is a challenging task. Search engines index tens to hundreds of millions of web pages involving a comparable number of distinct terms. They answer tens of millions of queries every day. Despite the importance of large-scale search engines on the web, very little academic research has been done on them. Furthermore, due to rapid advance in technology and web proliferation, creating a web search engine today is very different from three years ago. This paper provides an in-depth description of our large-scale web search engine -- the first such detailed public description we know of to date. ",
  organization_id: 3},
#4
  {title: "Distinctive Image Features from Scale-Invariant Keypoints", description: "This paper presents a method for extracting distinctive invariant features from images that can be used to perform reliable matching between different views of an object or scene. The features are invariant to image scale and rotation, and are shown to provide robust matching across a a substantial range of affine distortion, change in 3D viewpoint, addition of noise, and change in illumination. The features are highly distinctive, in the sense that a single feature can be correctly matched with high probability against a large database of features from many images. This paper also describes an approach to using these features",
  organization_id: 4},
#5
  {title: "Reinforcement Learning: An Introduction", description: "Reinforcement learning, one of the most active research areas in artificial intelligence, is a computational approach to learning whereby an agent tries to maximize the total amount of reward it receives when interacting with a complex, uncertain environment. In Reinforcement Learning, Richard Sutton and Andrew Barto provide a clear and simple account of the key ideas and algorithms of reinforcement learning. Their discussion ranges from the history of the field's intellectual foundations to the most recent developments and applications. The only necessary mathematical background is familiarity with elementary concepts of probability.",
  organization_id: 5},
#6
  {title: "HoloDesk", description: "The device uses an overhanging screen to project a 2D image through a beam splitter into the viewing area. A user's hands and face are tracked via Microsoft’s Xbox Kinect technology and a webcam, to help keep the holographic illusion in sync with the user's physical spatial relationship to the viewing area.",
  organization_id: 6},
#7
  {title: "PocketTouch", description: "The idea with PockTouch is that you could use finger gestures to control the cell phone in your pants pocket. With a flick of a finger, you could send a call to voice mail, skip a song playing on the phone, or send canned text replies to inbound messages. PocketTouch technology uses a capacitive sensor mounted on the back of your touch device that Microsoft says lets you navigate your pocketed phone using gestures without ever having to remove it from its case. PocketTouch is currently in an early development phase, and, as you can see from the video, it is not yet user friendly.",
  organization_id: 6},
#8
  {title: "Watson", description: "The most famous research project of 2011 is IBM's Watson, a super computer designed to use artificial intelligence to play the TV game show Jeopardy by processing natural language queries. After thrashing its human opponents on television in February, Watson was routed to more practical applications. Now, Watson provides its artificial intelligence to help doctors decide on optimal treatments for cancer patients. Watson parses data comparing symptoms with cures, and finds the most effective treatment for individuals.",
  organization_id: 7},
#9
  {title: "Vermeer", description: "Vermeer, centers around 3D images that respond to touch. Vermeer uses two facing parabolic mirrors to create a glasses-free 3D image that you can touch.",
  organization_id: 6},
#10
  {title: "Programmable Friction", description: "Programmable friction uses small mechanical discs to make the display of a tablet or smartphone vibrate so that it feels more or less 'sticky' depending on how you are interacting with objects on the screen,",
  organization_id: 4},
#11
  {title: "Robonaut", description: "The current iteration, Robonaut 2 (or R2), is a 300-pound bucket of bolts made to resemble a human torso. R2 can lift up to 20 pounds and its arms have similar mobility to a human being's. The NASA/GM prototype left Earth in February to take up permanent residence at the International Space Station. R2 successfully moved aboard the ISS for the first time on October 13 and has since undergone tests on November 4 and December 15.",
  organization_id: 8},
#12
  {title: "Semantic Role Labeling with Neural Network Factors", description: "We present a new method for semantic role labeling in which arguments and semantic roles are jointly embedded in a shared vector space for a given predicate. These embeddings belong to a neural network, whose output represents the potential functions of a graphical model designed for the SRL task. We consider both local and structured learning methods and obtain strong results on standard PropBank and FrameNet corpora with a straightforward product-of-experts model. We further show how the model can learn jointly from PropBank and FrameNet annotations to obtain additional improvements on the smaller FrameNet dataset.",
  organization_id: 2},
  #13
  {title: "Project Loon", description: "Project Loon is a project that aims to bring internet access to everyone by creating an internet network of balloons flying through the stratosphere. It uses wireless routers in balloons that are above weather and planes to give access to the internet to those who can't reach it or are in need of help.",
  organization_id: 2},
  #14
  {title: "Manifold", description: "Produce a means for researchers to find work and collaborators"},
  #15
  {title: "My Math", description: "Prove these"}
])

princeton_computer_science_projects = [["Proof verification and the hardness of approximation problems",
  "We show that every language in NP has a probablistic verifier that checks membership proofs for it using logarithmic number of random bits and by examining a constant number of bits in the proof. If a string is in the language, then there exists a proof such that the verifier accepts with probability 1 (i.e., for every choice of its random string). For strings not in the language, the verifier rejects every provided “proof” with probability at least 1/2. Our result builds upon and improves a recent result of Arora and Safra [1998] whose verifiers examine a nonconstant number of bits in the proof (though this number is a very slowly growing function of the input length).As a consequence, we prove that no MAX SNP-hard problem has a polynomial time approximation scheme, unless NP = P. The class MAX SNP was defined by Papadimitriou and Yannakakis [1991] and hard problems for this class include vertex cover, maximum satisfiability, maximum cut, metric TSP, Steiner trees and shortest superstring. We also improve upon the clique hardness results of Feige et al. [1996] and Arora and Safra [1998] and show that there exists a positive &egr; such that approximating the maximum clique size in an N-vertex graph to within a factor of N&egr; is NP-hard."],
  ["Testing for the consecutive ones property, interval graphs, and graph planarity using PQ-tree algorithms",
  "A data structure called a PQ-tree is introduced. PQ-trees can be used to represent the permutations of a set U in which various subsets of U occur consecutively. Efficient algorithms are presented for manipulating PQ-trees. Algorithms using PQ-trees are then given which test for the consecutive ones property in matrices and for graph planarity. The consecutive ones test is extended to a test for interval graphs using a recently discovered fast recognition algorithm for chordal graphs. All of these algorithms require a number of steps linear in the size of their input."
  ],
  ["A tutorial on support vector regression",
    "In this tutorial we give an overview of the basic ideas underlying Support Vector (SV) machines for function estimation. Furthermore, we include a summary of currently used algorithms for training SV machines, covering both the quadratic (or convex) programming part and advanced methods for dealing with large datasets. Finally, we mention some modifications and extensions that have been applied to the standard SV algorithm, and discuss the aspect of regularization from a SV perspective."
  ],
  ["The knowledge level ☆ ☆☆",
    ""
  ],
  ["On sparse spanners of weighted graphs",
    "Given a graphG, a subgraphG' is at-spanner ofG if, for everyu,v ɛV, the distance fromu tov inG' is at mostt times longer than the distance inG. In this paper we give a simple algorithm for constructing sparse spanners for arbitrary weighted graphs. We then apply this algorithm to obtain specific results for planar graphs and Euclidean graphs. We discuss the optimality of our results and present several nearly matching lower bounds."
  ],
  ["Competitive paging algorithms",
  "The paging problem is that of deciding which pages to keep in a memory of k pages in order to minimize the number of page faults. We develop the marking algorithm, a randomized on-line algorithm for the paging problem. We prove that its expected cost on any sequence of requests is within a factor of 2Hk of optimum. (Where Hk is the kth harmonic number, which is roughly ln k.) The best such factor that can be achieved is Hk. This is in contrast to deterministic algorithms, which cannot be guaranteed to be within a factor smaller than k of optimum. An alternative to comparing an on-line algorithm with the optimum off-line algorithm is the idea of comparing it to several other on-line algorithms. We have obtained results along these lines for the paging problem. Given a set of on-line algorithms and a set of appropriate constants, we describe a way of constructing another on-line algorithm whose performance is within the appropriate constant factor of each algorithm in the set."
  ],
  ["From user access patterns to dynamic hypertext linking",
  "This paper describes an approach for automatically classifying visitors of a web site according to their access patterns. User access logs are examined to discover clusters of users that exhibit similar information needs; e.g., users that access similar pages. This may result in a better understanding of how users visit the site, and lead to an improved organization of the hypertext documents for navigational convenience. More interestingly, based on what categories an individual user falls into, we can dynamically suggest links for him to navigate. In this paper, we describe the overall design of a system that implements these ideas, and elaborate on the preprocessing, clustering, and dynamic link suggestion tasks. We present some experimental results generated by analyzing the access log of a web site."
  ],
  ["Experiments on picture representation using regular decomposition",
  "The problem of building a computer-searchable data representation for a complex image and the effect of representation on algorithms for scene segmentation into regions is considered. A regular decomposition of picture area into successively smaller quadrants is defined, which involves logarithmic search. This hierarchical search and resulting picture representation are shown to enable rapid access of image data without regard to position, efficient storage, and approximate structural descriptions of constituent patterns. Examples involving solid geometrical objects and alphabetic characters are given."
  ]
]

princeton_computer_science_projects.each do |project|
  Project.create!(title: project[0], description: project[1], organization_id: 1)
end

google_projects = [
  ["Analysis of a very large web search engine query log",
  "In this paper we present an analysis of an AltaVista Search Engine query log consisting of approximately 1 billion entries for search requests over a period of six weeks. This represents almost 285 million user sessions, each an attempt to fill a single information need. We present an analysis of individual queries, query duplication, and query sessions. We also present results of a correlation analysis of the log entries, studying the interaction of terms within queries. Our data supports the conjecture that web users differ significantly from the user assumed in the standard information retrieval literature. Specifically, we show that web users type in short queries, mostly look at the first 10 results only, and seldom modify the query. This suggests that traditional information retrieval techniques may not work well for answering web search requests. The correlation analysis showed that the most highly correlated items are constituents of phrases. This result indicates it may be useful for search engines to consider search terms as parts of phrases even if the user did not explicitly specify them as such."
  ],
  ["Distributed Representations of Words and Phrases and their Compositionality",
  "The recently introduced continuous Skip-gram model is an efficient method for learning high-quality distributed vector representations that capture a large number of precise syntactic and semantic word relationships. In this paper we present several improvements that make the Skip-gram model more expressive and enable it to learn higher quality vectors more rapidly. We show that by subsampling frequent words we obtain significant speedup, and also learn higher quality representations as measured by our tasks. We also introduce Negative Sampling, a simplified variant of Noise Contrastive Estimation (NCE) that learns more accurate vectors for frequent words compared to the hierarchical softmax. An inherent limitation of word representations is their indifference to word order and their inability to represent idiomatic phrases. For example, the meanings of Canada and Air cannot be easily combined to obtain 'Air Canada'. Motivated by this example, we present a simple and efficient method for finding phrases, and show that their vector representations can be accurately learned by the Skip-gram model. "
  ],
  ["Predicting Initial Claims for Unemployment Benefits",
  ""
  ],
  ["Going Deeper with Convolutions",
  "We propose a deep convolutional neural network architecture codenamed 'Inception', which was responsible for setting the new state of the art for classification and detection in the ImageNet Large-Scale Visual Recognition Challenge 2014 (ILSVRC 2014). The main hallmark of this architecture is the improved utilization of the computing resources inside the network. This was achieved by a carefully crafted design that allows for increasing the depth and width of the network while keeping the computational budget constant. To optimize quality, the architectural decisions were based on the Hebbian principle and the intuition of multi-scale processing. One particular incarnation used in our submission for ILSVRC 2014 is called GoogLeNet, a 22 layers deep network, the quality of which is assessed in the context of classification and detection."
  ],
  ["WebTables: exploring the power of tables on the web",
    "The World-Wide Web consists of a huge number of unstructured documents, but it also contains structured data in the form of HTML tables. We extracted 14.1 billion HTML tables from Google's general-purpose web crawl, and used statistical classification techniques to find the estimated 154M that contain high-quality relational data. Because each relational table has its own 'schema' of labeled and typed columns, each such table can be considered a small structured database. The resulting corpus of databases is larger than any other corpus we are aware of, by at least five orders of magnitude."
  ],
  ["Mathematical models of vegetation pattern formation in ecohydrology",
  "Highly organized vegetation patterns can be found in a number of landscapes around the world. In recent years, several authors have investigated the processes underlying vegetation pattern formation. Patterns that are induced neither by heterogeneity in soil properties nor by the local topography are generally explained as the result of spatial self-organization resulting from “symmetry-breaking instability” in nonlinear systems. In this case, the spatial dynamics are able to destabilize the homogeneous state of the system, leading to the emergence of stable heterogeneous configurations. Both deterministic and stochastic mechanisms may explain the self-organized vegetation patterns observed in nature. After an extensive analysis of deterministic theories, we review noise-induced mechanisms of pattern formation and provide some examples of applications relevant to the environmental sciences."
  ]
]

google_projects.each do |project|
  Project.create!(title: project[0], description: project[1], organization_id: 2)
end

stanford_computer_science_projects = [
  ["A theory of timed automata",
  "We propose timed (finite) automata to model the behavior of real-time systems over time. Our definition provides a simple, and yet powerful, way to annotate state-transition graphs with timing constraints using finitely many real-valued clocks. A timed automaton accepts timed words–infinite sequences in which a real-valued time of occurrence is associated with each symbol. We study timed automata from the perspective of formal language theory: we consider closure properties, decision problems, and subclasses. We consider both nondeterministic and deterministic transition structures, and both Büchi and Muller acceptance conditions. We show that nondeterministic timed automata are closed under union and intersection, but not under complementation, whereas deterministic timed Muller automata are closed under all Boolean operations. The main construction of the paper is an (PSPACE) algorithm for checking the emptiness of the language of a (nondeterministic) timed automaton. We also prove that the universality problem and the language inclusion problem are solvable only for the deterministic automata: both problems are undecidable (Π11-hard) in the nondeterministic case and PSPACE-complete in the deterministic case. Finally, we discuss the application of this theory to automatic verification of real-time requirements of finite-state systems."
],
  ["Agent-oriented programming",
  "A new computational framework is presented, called agent-oriented programming (AOP), which can be viewed as a specialization of object-oriented programming. The state of an agent consists of components such as beliefs, decisions, capabilities, and obligations; for this reason the state of an agent is called its mental state. The mental state of agents is described formally in an extension of standard epistemic logics: beside temporalizing the knowledge and belief operators, AOP introduces operators for obligation, decision, and capability. Agents are controlled by agent programs, which include primitives for communicating with other agents. In the spirit of speech act theory, each communication primitive is of a certain type: informing, requesting, offering, and so on. This article presents the concept of AOP, discusses the concept of mental state and its formal underpinning, defines a class of agent interpreters, and then describes in detail a specific interpreter that has been implemented."
  ],
  ["Adaptive mesh refinement for hyperbolic partial differential equations",
  "An adaptive method based on the idea of multiple component grids for the solution of hyperbolic partial differential equations using finite difference techniques is presented. Based upon Richardson-type estimates of the truncation error, refined grids are created or existing ones removed to attain a given accuracy for a minimum amount of work. The approach is recursive in that fine grids can contain even finer grids. The grids with finer mesh width in space also have a smaller mesh width in time, making this a mesh refinement algorithm in time and space. We present the algorithm, error estimation procedure, and the data structures, and conclude with numerical examples in one and two space dimensions."
  ],
  ["SOAR: An architecture for general intelligence", ""
  ],
  ["Intention is choice with commitment",
  "This paper explores principles governing the rational balance among an agent's beliefs, goals, actions, and intentions. Such principles provide specifications for artificial agents, and approximate a theory of human action (as philosophers use the term). By making explicit the conditions under which an agent can drop his goals, i.e., by specifying how the agent is committed to his goals, the formalism captures a number of important properties of intention. Specifically, the formalism provides analyses for Bratman's three characteristic functional roles played by intentions [7, 9], and shows how agents can avoid intending all the foreseen side-effects of what they actually intend. Finally, the analysis shows how intentions can be adopted relative to a background of relevant beliefs and other intentions or goals. By relativizing one agent's intentions in terms of beliefs about another agent's intentions (or beliefs), we derive a preliminary account of interpersonal commitments."
  ]
]

stanford_computer_science_projects.each do |project|
  Project.create!(title: project[0], description: project[1], organization_id: 3)
end

uw_computer_science_projects = [["A logic for default reasoning", "The need to make default assumptions is frequently encountered in reasoning about incompletely specified worlds. Inferences sanctioned by default are best viewed as beliefs which may well be modified or rejected by subsequent observations. It is this property which leads to the non-monotonicity of any logic of defaults. We propose a logic for default reasoning. We then specialize our treatment to a very large class of commonly occuring defaults. For this class we develop a complete proof theory and show how to interface it with a top down resolution theorem prover. Finally, we provide criteria under which the revision of derived beliefs must be effected."],
["Electrorheological fluids: modeling and mathematical theory", ""],
["A logical framework for depiction and image interpretation",
"We propose a logical framework for depiction and interpretation that formalizes image domain knowledge, scene domain knowledge and the depiction mapping between the image and scene domains. This framework requires three sets of axioms: image axioms, scene axioms and depiction axioms. An interpretation of an image is defined to be a logical model of these axioms."
],
["A simple parallel tree contraction algorithm",
"A simple reduction from the tree contraction problem to the list ranking problem is presented. The reduction takes O(log n) time for a tree with n nodes, using Full-size image (<1 K) EREW processors. Thus tree contraction can be done as efficiently as list ranking. A broad class of parallel tree computations to which the tree contraction techniques apply is described. This subsumes earlier characterizations. Applications to the computation of certain properties of cographs are presented in some detail."
],
["Consistency in networks of relations",
"Artificial intelligence tasks which can be formulated as constraint satisfaction problems, with which this paper is for the most part concerned, are usually by solved backtracking the examining the thrashing behavior that nearly always accompanies backtracking, identifying three of its causes and proposing remedies for them we are led to a class of algorithms whoch can profitably be used to eliminate local (node, arc and path) inconsistencies before any attempt is made to construct a complete solution. A more general paradigm for attacking these tasks is the altenation of constraint manipulation and case analysis producing an OR problem graph which may be searched in any of the usual ways."
]]

uw_computer_science_projects.each do |project|
  Project.create!(title: project[0], description: project[1], organization_id: 4)
end

mit = [["A truth maintenance system",
  "To choose their actions, reasoning programs must be able to make assumptions and subsequently revise their beliefs when discoveries contradict these assumptions. The Truth Maintenance System (TMS) is a problem solver subsystem for performing these functions by recording and maintaining the reasons for program beliefs. Such recorded reasons are useful in constructing explanations of program actions and in guiding the course of action of a problem solver. This paper describes (1) the representations and structure of the tms, (2) the mechanisms used to revise the current set of beliefs, (3) how dependency-directed backtracking changes the current set of assumptions, (4) techniques for summarizing explanations of beliefs, (5) how to organize problem solvers into “dialectically arguing” modules, (6) how to revise models of the belief systems of others, and (7) methods for embedding control structures in patterns of assumptions. We stress the need of problem solvers to choose between alternative systems of beliefs, and outline a mechanism by which a problem solver can employ rules guiding choices of what to believe, what to want, and what to do."
],
["Elephants don't play chess",
"There is an alternative route to Artificial Intelligence that diverges from the directions pursued under that banner for the last thirty some years. The traditional approach has emphasized the abstract manipulation of symbols, whose grounding in physical reality has rarely been achieved. We explore a research methodology which emphasizes ongoing physical interaction with the environment as the primary source of constraint on the design of intelligent systems. We show how this methodology has recently had significant successes on a par with the most successful classical efforts. We outline plausible future work along these lines which can lead to vastly more ambitious systems."
],
["Procedural reflection in programming languages", ""],
["A survey of design methods for failure detection in dynamic systems",
"In this paper we survey a number of methods for the detection of abrupt changes (such as failures) in stochastic dynamical systems. We concentrate on the class of linear systems, but the basic concepts, if not the detailed analyses, carry over to other classes of systems. The methods surveyed range from the design of specific failure-sensitive filters, to the use of statistical tests on filter innovations, to the development of jump process formulations. Tradeoffs in complexity vs performance are discussed."
],
["On observability of discrete-event systems",
"The observability of discrete-event systems is investigated. A discrete-event system G is modeled as the controlled generator of a formal language Lm(G) in the framework of Ramadge and Wonham. To control G, a supervisor S is developed whose action is to enable and disable the controllable events of G according to a record of occurrences of the observable events of G, in such a way that the resulting closed-loop system obeys some prespecified operating rules embodied in a given language K. A necessary and sufficient condition is found for the existence of a supervisor S such that Lm (S/G) = K. Based on this condition, a solution of the supervisory control and observation problem (SCOP) is obtained. Two examples are provided.
open in overlay"
]]

mit.each do |project|
  Project.create!(title: project[0], description: project[1], organization_id: 5)
end

microsoft = [["Z3: An Efficient SMT Solver",
  "Satisfiability Modulo Theories (SMT) problem is a decision problem for logical first order formulas with respect to combinations of background theories such as: arithmetic, bit-vectors, arrays, and uninterpreted functions. Z3 is a new and efficient SMT Solver freely available from Microsoft Research. It is used in various software verification and analysis applications."
  ],
  ["Precomputed radiance transfer for real-time rendering in dynamic, low-frequency lighting environments",
  "We present a new, real-time method for rendering diffuse and glossy objects in low-frequency lighting environments that captures soft shadows, interreflections, and caustics. As a preprocess, a novel global transport simulator creates functions over the object's surface representing transfer of arbitrary, low-frequency incident lighting into transferred radiance which includes global effects like shadows and interreflections from the object onto itself. At run-time, these transfer functions are applied to actual incident lighting. Dynamic, local lighting is handled by sampling it close to the object every frame; the object can also be rigidly rotated with respect to the lighting and vice versa. Lighting and transfer functions are represented using low-order spherical harmonics. This avoids aliasing and evaluates efficiently on graphics hardware by reducing the shading integral to a dot product of 9 to 25 element vectors for diffuse receivers. Glossy objects are handled using matrices rather than vectors. We further introduce functions for radiance transfer from a dynamic lighting environment through a preprocessed object to neighboring points in space. These allow soft shadows and caustics from rigidly moving objects to be cast onto arbitrary, dynamic receivers. We demonstrate real-time global lighting effects with this approach."
  ],
  ["A Structure and Motion Toolkit in Matlab: Interactive adventures in S and M",
  ""],
  ["Fast Training of Support Vector Machines Using Sequential Minimal Optimization", ""]
]

microsoft.each do |project|
  Project.create!(title: project[0], description: project[1], organization_id: 6)
end

watson = [["Pairing symmetry and flux quantization in a tricrystal superconducting ring of YBa2Cu3O7-δ",
  "We have used the concept of flux quantization in superconducting YBa2Cu3O7-δ rings with 0, 2, and 3 grain-boundary Josephson junctions to test the pairing symmetry in high-Tc superconductors. The magnetic flux threading these rings at 4.2 K is measured by employing a scanning superconducting quantum interference device microscope. Spontaneous magnetization of a half magnetic flux quantum, Φ0/2=h/4e has been observed in the 3-junction ring, but not in the 2-junction rings. These results are consistent with d-wave pairing symmetry."
  ],
  ["Damascene copper electroplating for chip interconnections",
    "Damascene Cu electroplating for on-chip metallization, which we conceived and developed in the early 1990s, has been central to IBM's Cu chip interconnection technology. We review here the challenges of filling trenches and vias with Cu without creating a void or seam, and the discovery that electrodeposition can be engineered to give filling performance significantly better than that achievable with conformal step coverage. This attribute of superconformal deposition, which we call superfilling, and its relation to plating additives are discussed, and we present a numerical model that represents the shape-change behavior of this system."
  ],
  ["Amorphous metallic films for bubble domain applications",
    "We have found that sputtered amorphous films of Gd-Co and Gd-Fe have perpendicular magnetic anisotropy. The demagnetized domain configuration consists of stripe domains, and bubble domains were nucleated in an applied field. By controlling the sputtering conditions, films with a wide variety of magnetic properties were obtained."
  ],
  ["Inversion mode n-channel GaAs field effect transistor with high-k/metal gate",
  "Highly effective passivation of GaAs surface is achieved by a thin amorphous Si (a-Si) cap, deposited by plasma enhanced chemical vapor deposition method. Capacitance voltage measurements show that carrier accumulation or inversion layer is readily formed in response to an applied electrical field when GaAs is passivated with a-Si. High performance inversion mode n-channel GaAs metal-oxide-semiconductor field-effect transistors (MOSFETs) were fabricated with an a-Si/high-k/metal gate stack. Drain current in saturation region of 220mA /mm with a mobility of 885cm2/Vs were obtained at a gate overdrive voltage of 3.25V in MOSFETs with 5μm gate length."
  ],
  ["Defects associated with the accommodation of misfit between crystals",
  "A substantial fraction of the defects in epitaxial thin films are formed to accommodate part of the misfit between the stress−free lattice parameters of film and substrate. This paper describes some of the complete dislocations, partial dislocations, and cracks that are made for this purpose. Also described are the optimum division of misfit between dislocations and elastic strain, and the modification of this division caused by the Peierls stress and the barrier to nucleation of dislocation half−loops. The use of misfit strain to remove dislocations, the effect of misfit strain on the mode of film growth, and the evidence for dislocation sources in epitaxial layers are discussed in brief."
  ]]

  watson.each do |project|
    Project.create!(title: project[0], description: project[1], organization_id: 6)
  end

ProjectMembershipNotification.create!([

])
Task.create!([
])

wmales = ["http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_40/v1441341979/Asif_Chinwallapng_j9l9z0.png",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_50/v1441341979/Robert_Fulton_jchthn.png",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_50/v1441341979/thumb1_z5tw54.png",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_50/v1441341979/thumb4_fw2iti.png",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_50/v1441341980/thumb5_u1fqds.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_40/v1441341979/thumb6_upzmpg.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_50/v1441341980/thumb12_nxqqrn.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_100/v1441341980/thumb13_yohbds.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_45/v1441341980/thumb16_p7h1ar.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_40/v1441343467/thumb20_auacno.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_45/v1441343534/thumb21_oc5ktr.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_40/v1441343599/thumb21_ldyobp.png",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_40/v1441343665/thumb22_z5cb6t.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344115/thumb24_etdfoh.jpg",
"http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344350/thumb29_avovho.jpg"
]


amales = ["http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_40/v1441344053/thumb23_h1gnxj.jpg"]

brmale = ["http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_50/v1441341979/thumb8_cukts9.jpg"]
wfemales = ["http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_40/v1441341979/Lucinda_Fulton_xubxee.png",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_45/v1441341980/thumb14g_tm10h3.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_45/v1441341980/thumb15g_yi19vb.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_45/v1441341980/thumb18g_ndsfsl.png",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_45/v1441341980/thumb19g_paeyqq.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344176/thumb25_eltjqq.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344221/thumb26_hosufo.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344267/thumb27_hmnqgd.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344311/thumb28_gdlsrc.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344395/thumb30_m8nyvz.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344441/thumb31_jlpztw.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344499/thumb32_tx7doo.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344547/thumb33_ecnctj.jpg"
]

blmales = ["http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_50/v1441341979/thumb9_cqo9h1.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344594/thumb34b_dbr9l7.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344737/thumb37b_swfizt.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344791/thumb38b_eqa1bg.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344866/thumb39b_lscuis.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344917/thumb40b_rfw4bw.jpg",
  "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344955/thumb41b_ygce3j.jpg"
]

blfemale = ["http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_42/v1441344671/thumb36bg_skesmf.jpg"
]

people = (amales + brmale + wfemales + blmales + blfemale).shuffle
User.create!([
{fname: "Guest", mname: "G", lname: "User", email: "guest@example.com", password_digest: BCrypt::Password.create("aaaaaa"), img_url: "http://res.cloudinary.com/dlyzaubjo/image/upload/c_scale,w_45/v1440547188/Grey_Wolf_Face_xhe7wb.jpg"}
])

# wmales.each do |male|
#   User.create!(fname: Faker::Name.first_name, mname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.email, password_digest: BCrypt::Password.create("aaaaaa"), img_url: male)
# end
#
# wmales = User.all
#
# wfemales.each do |female|
#   User.create!(fname: Faker::Name.first_name, mname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.email, password_digest: BCrypt::Password.create("aaaaaa"), img_url: female)
# end
#
# wfemales = User.all[-wfemales.size..-1]
#
#
# blmales.each do |male|
#   User.create!(fname: Faker::Name.first_name, mname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.email, password_digest: BCrypt::Password.create("aaaaaa"), img_url: male)
# end
#
# blmales = User.all[-blmales.size..-1]
#
# User.create!(fname: Faker::Name.first_name, mname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.email, password_digest: BCrypt::Password.create("aaaaaa"), img_url: blfemale[0])
#
# blfemale = User.all.last

people.each do |person|
  User.create!(fname: Faker::Name.first_name, mname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.email, password_digest: BCrypt::Password.create("aaaaaa"), img_url: person)
end

OrganizationMembership.create!([
  {organization_id: 6, member_id: 1},
  {organization_id: 4, member_id: 1},
  {organization_id: 7, member_id: 1},
  {organization_id: 2, member_id: 1},
  {organization_id: 3, member_id: 1},
  {organization_id: 1, member_id: 2},
  {organization_id: 1, member_id: 3},
  {organization_id: 1, member_id: 4}

])

Workspace.create!([
  {title: "Tech", user_id: 1},
  {title: "Google", user_id: 1},
  {title: "Computer Science", user_id: 1},
  {title: "Personal", user_id: 1},

])

WorkspaceProjectMembership.create!([
  {project_id: 6, workspace_id: 1},
  {project_id: 10, workspace_id: 1},
  {project_id: 8, workspace_id: 1},
  {project_id: 2, workspace_id: 3},

  {project_id: 8, workspace_id: 3},

  {project_id: 3, workspace_id: 2},

  {project_id: 13, workspace_id: 2},

  {project_id: 3, workspace_id: 3},

  {project_id: 14, workspace_id: 4},
  {project_id: 15, workspace_id: 4}
])

TeamMembership.create!([
  {project_id: 6, member_id: 1},
  {project_id: 10, member_id: 1},
  {project_id: 8, member_id: 1},
  {project_id: 2, member_id: 1},

  {project_id: 8, member_id: 1},

  {project_id: 3, member_id: 1},

  {project_id: 13, member_id: 1},

  {project_id: 3, member_id: 1},

  {project_id: 14, member_id: 1},
  {project_id: 15, member_id: 1}
])


projs = [[6,6], [10, 4], [8,7], [2,2], [3,3], [13,2]]
projs.each do |proj|
  people = User.all[1..-1]
  9.times do
    member_id = people.sample.id
    TeamMembership.create!(member_id: member_id, project_id: proj[0])
    OrganizationMembership.create!(member_id: member_id, organization_id: proj[1])
    people.reject {|mem| mem.id == member_id}
  end

  # member_id = wfemales_select.sample.id
  # TeamMembership.create!(member_id: member_id, project_id: proj)
  # wfemales_select = wfemales_select.reject {|mem| mem.id == member_id}
  #
  # member_id = wmales.sample.id
  # TeamMembership.create!(member_id: member_id, project_id: proj)
  # wmales_select = wmales_select.reject {|mem| mem.id == member_id}
  #
  # member_id = blmales.sample.id
  # TeamMembership.create!(member_id: member_id, project_id: proj)
  # blmales_select = blmales_select.reject {|mem| mem.id == member_id}

end
