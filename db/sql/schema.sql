drop table category cascade;
drop table newssite cascade;
drop table person cascade;
drop table vote cascade;

create table category (
    category_id serial primary key,
    name text not null unique, 
		range_min smallint NOT NULL,
		range_max smallint NOT NULL,
    added timestamp with time zone default now()
);

create table newssite (
    newssite_id serial primary key,
    name text not null unique,
    url text not null unique,
		route text not null unique,
    added timestamp with time zone default now()
);

create table person (
  person_id serial primary key,
  email text not null unique,
  name text not null,
  added timestamp with time zone default now()
);

create table vote (
    vote_id serial primary key,
    person_id integer not null references person(person_id) on delete cascade on update cascade,
    newssite_id integer not null references newssite(newssite_id) on delete cascade on update cascade,
    category_id integer not null references category(category_id) on delete cascade on update cascade,
    score smallint NOT NULL
);

create unique INDEX unique_vote on vote (person_id, newssite_id, category_id);

-- create view vote_v as
--  select v.vote_id,
--     p.email AS email,
--     p.name as name
--     n.name AS site,
--     d.name AS category,
--     v.score
--    from (vote v
--      left join newssite n on (v.newssite_id = n.newssite_id)
--      left join category d on (v.category_id = d.category_id))
--      left join person p on (v.person_id = p.person_id));