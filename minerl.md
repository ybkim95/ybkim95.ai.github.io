---
layout: page
title: MineRL Diamond Competition 2021
permalink: /minerl/
---

**Introduction**
---

The MineRL 2021 Diamond Competition aims to foster the development of algorithms which can efficiently leverage human demonstrations to drastically reduce the number of samples needed to solve complex, hierarchical, and sparse environments. 

<img src="/assets/img/minerl.gif" width="60%" height="60%"
     alt="Markdown Monster icon"
     style="float: center;"/>

[LINK](https://www.aicrowd.com/challenges/neurips-2021-minerl-diamond-competition)

**Task**
---

The task of the competition is solving the MineRLObtainDiamond-v0 environment (or MineRLObtainDiamondVectorObf-v0 for Research track). In this environment, the agent begins in a random starting location without any items, and is tasked with obtaining a diamond. This task can only be accomplished by navigating the complex item hierarchy of Minecraft. 

<img src="/assets/img/task.png" width="80%" height="80%"
     alt="Markdown Monster icon"
     style="float: center;"/>

The agent receives a high reward for obtaining a diamond as well as smaller, auxiliary rewards for obtaining prerequisite items. In addition to the main environment, we provide a number of auxiliary environments. These consist of tasks which are either subtasks of ObtainDiamond or other tasks within Minecraft.

**MineRLObtainDiamond-v0**
---

<img src="/assets/img/diamond1.gif" width="10%" height="10%"
     alt="Markdown Monster icon"
     style="float: center;"/>
<img src="/assets/img/diamond2.gif" width="10%" height="10%"
     alt="Markdown Monster icon"
     style="float: center;"/>
<img src="/assets/img/diamond3.gif" width="10%" height="10%"
     alt="Markdown Monster icon"
     style="float: center;"/>
<img src="/assets/img/diamond4.gif" width="10%" height="10%"
     alt="Markdown Monster icon"
     style="float: center;"/>


In this environment the agent is required to obtain a diamond. The agent begins in a random starting location on a random survival map without any items, matching the normal starting conditions for human players in Minecraft. The agent is given access to a selected summary of its inventory and GUI free crafting, smelting, and inventory management actions.

During an episode the agent is rewarded only once per item the first time it obtains that item in the requisite item hierarchy to obtaining a diamond. The rewards for each item are given here:

``` ruby
<Item reward="1" type="log" />
<Item reward="2" type="planks" />
<Item reward="4" type="stick" />
<Item reward="4" type="crafting_table" />
<Item reward="8" type="wooden_pickaxe" />
<Item reward="16" type="cobblestone" />
<Item reward="32" type="furnace" />
<Item reward="32" type="stone_pickaxe" />
<Item reward="64" type="iron_ore" />
<Item reward="128" type="iron_ingot" />
<Item reward="256" type="iron_pickaxe" />
<Item reward="1024" type="diamond" />
```

**Observation Space**
---

``` ruby
Dict({
    "equipped_items": {
            "mainhand": {
                    "damage": "Box(low=-1, high=1562, shape=())",
                    "maxDamage": "Box(low=-1, high=1562, shape=())",
                    "type": "Enum(air,iron_axe,iron_pickaxe,none,other,stone_axe,stone_pickaxe,wooden_axe,wooden_pickaxe)"
            }
    },
    "inventory": {
            "coal": "Box(low=0, high=2304, shape=())",
            "cobblestone": "Box(low=0, high=2304, shape=())",
            "crafting_table": "Box(low=0, high=2304, shape=())",
            "dirt": "Box(low=0, high=2304, shape=())",
            "furnace": "Box(low=0, high=2304, shape=())",
            "iron_axe": "Box(low=0, high=2304, shape=())",
            "iron_ingot": "Box(low=0, high=2304, shape=())",
            "iron_ore": "Box(low=0, high=2304, shape=())",
            "iron_pickaxe": "Box(low=0, high=2304, shape=())",
            "log": "Box(low=0, high=2304, shape=())",
            "planks": "Box(low=0, high=2304, shape=())",
            "stick": "Box(low=0, high=2304, shape=())",
            "stone": "Box(low=0, high=2304, shape=())",
            "stone_axe": "Box(low=0, high=2304, shape=())",
            "stone_pickaxe": "Box(low=0, high=2304, shape=())",
            "torch": "Box(low=0, high=2304, shape=())",
            "wooden_axe": "Box(low=0, high=2304, shape=())",
            "wooden_pickaxe": "Box(low=0, high=2304, shape=())"
    },
    "pov": "Box(low=0, high=255, shape=(64, 64, 3))"
})
```

**Action Space**
---

``` ruby
Dict({
    "attack": "Discrete(2)",
    "back": "Discrete(2)",
    "camera": "Box(low=-180.0, high=180.0, shape=(2,))",
    "craft": "Enum(crafting_table,none,planks,stick,torch)",
    "equip": "Enum(air,iron_axe,iron_pickaxe,none,stone_axe,stone_pickaxe,wooden_axe,wooden_pickaxe)",
    "forward": "Discrete(2)",
    "jump": "Discrete(2)",
    "left": "Discrete(2)",
    "nearbyCraft": "Enum(furnace,iron_axe,iron_pickaxe,none,stone_axe,stone_pickaxe,wooden_axe,wooden_pickaxe)",
    "nearbySmelt": "Enum(coal,iron_ingot,none)",
    "place": "Enum(cobblestone,crafting_table,dirt,furnace,none,stone,torch)",
    "right": "Discrete(2)",
    "sneak": "Discrete(2)",
    "sprint": "Discrete(2)"
})
```

**Usage**
---

``` python
import gym
import minerl

# Run a random agent through the environment
env = gym.make("MineRLObtainDiamond-v0")  # A MineRLObtainDiamond-v0 env

obs = env.reset()
done = False

while not done:
    # Take a no-op through the environment.
    obs, rew, done, _ = env.step(env.action_space.noop())
    # Do something

######################################

# Sample some data from the dataset!
data = minerl.data.make("MineRLObtainDiamond-v0")

# Iterate through a single epoch using sequences of at most 32 steps
for obs, rew, done, act in data.batch_iter(num_epochs=1, batch_size=32):
    # Do something
```

**Presentation**
---
The overall work is presented in the below video (Korean). 

<iframe width="650" height="335" src="https://www.youtube.com/embed/QeQHPlEHI_o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br>

Our main idea was to adopt InfoGAIL algorithm instead of using generic RL algorithms to train the agent since we were able to utilize the expert's demonstration dataset.

<img src="/assets/img/InfoGAIL/abstract.png" width="70%" height="70%"
     alt="Markdown Monster icon"
     style="float: center;"/>

For more details about InfoGAIL algorithm, please refer to my paper review about this: [LINK](/study/2021/11/26/InfoGAIL/)

And for more detailed report, please email me to ybkim95@yonsei.ac.kr.


**Result**
---

Our team got 1st place with popularity award for the Software Capstone Project.

<img src="/assets/img/photo/award.png" width="50%" height="50%"
     alt="Markdown Monster icon"
     style="float: center;"/>