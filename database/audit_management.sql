--
-- PostgreSQL database dump
--

\restrict hhmTZng7nnyTGM1degc6s6K2hhu40RaBdf8vthIx2YiqthkGl0Zy5YKPy7sF74j

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-06-02 08:43:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 227 (class 1259 OID 16456)
-- Name: CorrectiveAction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CorrectiveAction" (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    priority text NOT NULL,
    status text NOT NULL,
    "dueDate" timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."CorrectiveAction" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16455)
-- Name: CorrectiveAction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CorrectiveAction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CorrectiveAction_id_seq" OWNER TO postgres;

--
-- TOC entry 5060 (class 0 OID 0)
-- Dependencies: 226
-- Name: CorrectiveAction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CorrectiveAction_id_seq" OWNED BY public."CorrectiveAction".id;


--
-- TOC entry 223 (class 1259 OID 16424)
-- Name: Template; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Template" (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Template" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16438)
-- Name: TemplateQuestion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."TemplateQuestion" (
    id integer NOT NULL,
    "questionText" text NOT NULL,
    "fieldType" text NOT NULL,
    required boolean DEFAULT false NOT NULL,
    "templateId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    options jsonb
);


ALTER TABLE public."TemplateQuestion" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16437)
-- Name: TemplateQuestion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."TemplateQuestion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."TemplateQuestion_id_seq" OWNER TO postgres;

--
-- TOC entry 5061 (class 0 OID 0)
-- Dependencies: 224
-- Name: TemplateQuestion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."TemplateQuestion_id_seq" OWNED BY public."TemplateQuestion".id;


--
-- TOC entry 222 (class 1259 OID 16423)
-- Name: Template_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Template_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Template_id_seq" OWNER TO postgres;

--
-- TOC entry 5062 (class 0 OID 0)
-- Dependencies: 222
-- Name: Template_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Template_id_seq" OWNED BY public."Template".id;


--
-- TOC entry 221 (class 1259 OID 16406)
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'user'::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16405)
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- TOC entry 5063 (class 0 OID 0)
-- Dependencies: 220
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- TOC entry 219 (class 1259 OID 16391)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 4885 (class 2604 OID 16459)
-- Name: CorrectiveAction id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CorrectiveAction" ALTER COLUMN id SET DEFAULT nextval('public."CorrectiveAction_id_seq"'::regclass);


--
-- TOC entry 4880 (class 2604 OID 16427)
-- Name: Template id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Template" ALTER COLUMN id SET DEFAULT nextval('public."Template_id_seq"'::regclass);


--
-- TOC entry 4882 (class 2604 OID 16441)
-- Name: TemplateQuestion id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TemplateQuestion" ALTER COLUMN id SET DEFAULT nextval('public."TemplateQuestion_id_seq"'::regclass);


--
-- TOC entry 4877 (class 2604 OID 16409)
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- TOC entry 5054 (class 0 OID 16456)
-- Dependencies: 227
-- Data for Name: CorrectiveAction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CorrectiveAction" (id, title, description, priority, status, "dueDate", "createdAt", "updatedAt") FROM stdin;
7	Ensure PPE Usage	Workers were not wearing safety helmets in production area	Medium	In Progress	2026-06-10 00:00:00	2026-06-02 01:51:47.663	2026-06-02 01:51:47.663
8	Clear Emergency Exit Path	Materials blocking emergency exit pathway	Medium	In Progress	2026-06-10 00:00:00	2026-06-02 01:52:04.759	2026-06-02 01:52:04.759
9	Investigate Product Quality Defect	Quality defects identified in finished products during audit.	High	Pending	2026-06-11 00:00:00	2026-06-02 02:42:56.197	2026-06-02 02:42:56.197
\.


--
-- TOC entry 5050 (class 0 OID 16424)
-- Dependencies: 223
-- Data for Name: Template; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Template" (id, name, description, "createdAt", "updatedAt") FROM stdin;
7	Safety Inspection Checklist	Monthly workplace safety inspection	2026-06-02 01:47:21.268	2026-06-02 01:47:21.268
8	Equipment Inspection Checklist	Routine equipment maintenance inspection	2026-06-02 01:47:43.238	2026-06-02 01:47:43.238
9	Quality Audit Checklist	Product quality verification audit	2026-06-02 01:47:57.303	2026-06-02 01:47:57.303
10	Quality Audit Checklist	Product quality verification audit checklist.	2026-06-02 02:41:49.188	2026-06-02 02:41:49.188
\.


--
-- TOC entry 5052 (class 0 OID 16438)
-- Dependencies: 225
-- Data for Name: TemplateQuestion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."TemplateQuestion" (id, "questionText", "fieldType", required, "templateId", "createdAt", "updatedAt", options) FROM stdin;
13	Are fire extinguishers available and accessible?	checkbox	t	9	2026-06-02 01:48:38.161	2026-06-02 01:48:38.161	[]
14	Are emergency exits clearly marked?	checkbox	t	9	2026-06-02 01:49:02.614	2026-06-02 01:49:02.614	[]
15	Is PPE being used by employees?	checkbox	f	9	2026-06-02 01:49:16.773	2026-06-02 01:49:16.773	[]
16	Is the equipment functioning properly?	checkbox	f	8	2026-06-02 01:49:36.298	2026-06-02 01:49:36.298	[]
17	Are maintenance records updated?	checkbox	f	8	2026-06-02 01:49:57.999	2026-06-02 01:49:57.999	[]
18	Remarks	text	f	8	2026-06-02 01:50:10.851	2026-06-02 01:50:10.851	[]
19	Does the product meet quality standards?	checkbox	f	7	2026-06-02 01:50:25.256	2026-06-02 01:50:25.256	[]
20	Any defects identified?	checkbox	f	7	2026-06-02 01:50:39.905	2026-06-02 01:50:39.905	[]
21	Additional comments	text	f	7	2026-06-02 01:50:53.505	2026-06-02 01:50:53.505	[]
\.


--
-- TOC entry 5048 (class 0 OID 16406)
-- Dependencies: 221
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, email, password, role, "createdAt", "updatedAt") FROM stdin;
1	Gokul	gokul@gmail.com	$2b$10$e0oSIBSbA5SfoxGHGJ7/ZuASzKoFBNDoiRQ8KmNcK3zPPBVhr7UeO	user	2026-06-01 07:52:59.101	2026-06-01 07:52:59.101
2	Audit Test	audit_test@example.com	$2b$10$WgkDwknvBrKD64X2m7RgnOY5X279ZQgpGd8REZDVPphNIHmcmC.VO	user	2026-06-01 09:49:12.97	2026-06-01 09:49:12.97
\.


--
-- TOC entry 5046 (class 0 OID 16391)
-- Dependencies: 219
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
1a9d804f-e254-46f0-9ff1-d53d5c8645c9	37fa7990766f38effbcbcdde98936d00242405f1f4b833fbefcb89cd620f94ea	2026-06-01 13:18:15.219367+05:30	20260601074815_init	\N	\N	2026-06-01 13:18:15.178179+05:30	1
962050d6-278c-444f-b4b0-6e4d62c1e673	9f7ff704f3244d6356993e4086364a75831506ff015284dc7d9d9dc90a3fa04e	2026-06-01 16:25:09.832315+05:30	20260601105509_update_question_options_json	\N	\N	2026-06-01 16:25:09.818569+05:30	1
\.


--
-- TOC entry 5064 (class 0 OID 0)
-- Dependencies: 226
-- Name: CorrectiveAction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CorrectiveAction_id_seq"', 9, true);


--
-- TOC entry 5065 (class 0 OID 0)
-- Dependencies: 224
-- Name: TemplateQuestion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."TemplateQuestion_id_seq"', 22, true);


--
-- TOC entry 5066 (class 0 OID 0)
-- Dependencies: 222
-- Name: Template_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Template_id_seq"', 10, true);


--
-- TOC entry 5067 (class 0 OID 0)
-- Dependencies: 220
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 2, true);


--
-- TOC entry 4897 (class 2606 OID 16471)
-- Name: CorrectiveAction CorrectiveAction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CorrectiveAction"
    ADD CONSTRAINT "CorrectiveAction_pkey" PRIMARY KEY (id);


--
-- TOC entry 4895 (class 2606 OID 16454)
-- Name: TemplateQuestion TemplateQuestion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TemplateQuestion"
    ADD CONSTRAINT "TemplateQuestion_pkey" PRIMARY KEY (id);


--
-- TOC entry 4893 (class 2606 OID 16436)
-- Name: Template Template_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Template"
    ADD CONSTRAINT "Template_pkey" PRIMARY KEY (id);


--
-- TOC entry 4891 (class 2606 OID 16422)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 4888 (class 2606 OID 16404)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4889 (class 1259 OID 16472)
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- TOC entry 4898 (class 2606 OID 16626)
-- Name: TemplateQuestion TemplateQuestion_templateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TemplateQuestion"
    ADD CONSTRAINT "TemplateQuestion_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES public."Template"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2026-06-02 08:43:11

--
-- PostgreSQL database dump complete
--

\unrestrict hhmTZng7nnyTGM1degc6s6K2hhu40RaBdf8vthIx2YiqthkGl0Zy5YKPy7sF74j

